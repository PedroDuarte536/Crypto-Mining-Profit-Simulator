const ProphitCalc = (() => {

  const machine_select = document.querySelector("[name=machine]")
  const coin_select = document.querySelector("[name=coin]")
  const country_select = document.querySelector("[name=country]")

  const timelines = {
    hourly: d => d,
    daily: d => d * 24,
    weekly: d => d * 24 * 7,
    monthly: d => d * 24 * 30,
    yearly: d => d * 24 * 30 * 12
  }
 
  const calculate_prophit = () => {
    let machine_idx = parseInt(machine_select.value)
    let coin_idx = parseInt(coin_select.value)
    let country_idx = parseInt(country_select.value)

    let coin_name = ''
    let coin_hour_gain = 0
    let dollar_hour_gain = 0
    let dollar_hour_profit = 0

    if (machine_idx && coin_idx) {
      let machine_info = machines[machine_idx-1].algorithms.filter(a => a.algorithm == coins[coin_idx-1].algorithm)[0]
      coin_name = coins[coin_idx-1].name
      coin_hour_gain = machine_info.hashes * coins[coin_idx-1].prophit 
      dollar_hour_gain = coin_hour_gain * coins[coin_idx-1].price
      if (country_idx) dollar_hour_profit = dollar_hour_gain - eletricity_cost[Object.keys(eletricity_cost)[country_idx-1]] * machine_info.power
    }

    Object.entries(timelines).forEach(entries => {
      document.getElementById("coin_gain_" + entries[0]).innerHTML = entries[1](coin_hour_gain).toFixed(5) + ' ' + coin_name
      document.getElementById("dollar_gain_" + entries[0]).innerHTML = '$ ' + entries[1](dollar_hour_gain).toFixed(5)
      document.getElementById("dollar_prophit_" + entries[0]).innerHTML = '$ ' + entries[1](dollar_hour_profit).toFixed(5)
    });
  }

  const get_countries = () => Object.keys(eletricity_cost)

  const get_machines = (algorithm = algorithms.ANY) => algorithm == algorithms.ANY ? machines : machines.map(m => m.algorithms.map(a => a.algorithm).includes(algorithm) ? m : null)

  const get_coins = (algorithm = algorithms.ANY) => algorithm == algorithms.ANY ? coins : coins.map(c => c.algorithm == algorithm ? c : null)

  const build_select_options = (options) => {
    let opts = [ { name: '' } ]
    opts.push(...options)

    return opts.map((o, i) => o === null ? '' : '<option value="' + i + '">' + o.name + '</option>').join('\n')
  }

  const update_machines_select = (algorithm = algorithms.ANY) => machine_select.innerHTML = build_select_options(get_machines(algorithm))

  const update_coins_select = (algos = [algorithms.ANY]) => {
    coin_select.innerHTML = ''

    algos.forEach(a => coin_select.innerHTML += build_select_options(get_coins(a)));
  }

  const update_countries_select = () => country_select.innerHTML = build_select_options(get_countries().map(c => { return { name: c } }))

  const machines_select_onchange = () => {
    let val = parseInt(machine_select.value)
    let coins_val = coin_select.value

    if (val == 0) update_coins_select()
    else update_coins_select(machines[val-1].algorithms.map(a => a.algorithm))
    coin_select.value = coins_val

    calculate_prophit()
  }

  const coins_select_onchange = () => {
    let val = parseInt(coin_select.value)
    let machines_val = machine_select.value

    if (val == 0) update_machines_select()
    else update_machines_select(coins[val-1].algorithm)
    machine_select.value = machines_val

    calculate_prophit()
  }

  const country_select_onchange = () => calculate_prophit()

  const init = () => {
    update_machines_select()
    update_coins_select()
    update_countries_select()
    calculate_prophit()
  } 

  return {
    init,
    machines_select_onchange,
    coins_select_onchange,
    country_select_onchange
  }
})()

ProphitCalc.init()