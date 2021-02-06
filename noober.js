let render = document.querySelector('.rides')

function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  document.querySelector('.rides').innerHTML = ""

  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
      
    }
    // console.log(document.querySelector('.rides '))
    // document.querySelector('.rides inline-block').remove()
    // console.log(document.querySelector('.rides'))
    
  }
  
}


function arrayProcesser (json , levelofServiceDesired) {
  
  ridesArray = []
  
  if (levelofServiceDesired == "Noober Pool") {
    for (let i = 0; i<json.length; i++) {
      if (levelOfService(json[i]) == levelofServiceDesired) {
        ridesArray.push (json[i])
      }           
    }

  } else if (levelofServiceDesired == "Noober Purple") {
      for (let i = 0; i<json.length; i++) {
        if (levelOfService(json[i]) == levelofServiceDesired) {
          ridesArray.push (json[i])
        }           
      }
  } else if (levelofServiceDesired == "Noober XL") {
      for (let i = 0; i<json.length; i++) {
        if (levelOfService(json[i]) == levelofServiceDesired) {
          ridesArray.push (json[i])
        }           
      }
  } else if (levelofServiceDesired == "Noober X") {
      for (let i = 0; i<json.length; i++) {
        if (levelOfService(json[i]) == levelofServiceDesired) {
          ridesArray.push (json[i])
        }           
      }
  } else if (levelofServiceDesired == "All Rides") {
    for (let i = 0; i<json.length; i++) {
      ridesArray.push (json[i])
    }
  }
  return ridesArray
}


async function pageLoaded() {


  //listen for button and feed input to array sorter
  let button = document.querySelector('#all-filter')
  button.addEventListener('click', async function() {
    let response = await fetch('https://kiei451.com/api/rides.json')
    json = await response.json()
    renderRides(arrayProcesser (json , "All Rides"))
  })
  let button2 = document.querySelector('#noober-pool-filter')
  button2.addEventListener('click', async function() {
    let response = await fetch('https://kiei451.com/api/rides.json')
    json = await response.json()
    renderRides(arrayProcesser (json , "Noober Pool"))
  })
  let button3 = document.querySelector('#noober-purple-filter')
  button3.addEventListener('click', async function() {
    let response = await fetch('https://kiei451.com/api/rides.json')
    json = await response.json()
    renderRides(arrayProcesser (json , "Noober Purple"))
  })
  let button4 = document.querySelector('#noober-xl-filter')
  button4.addEventListener('click', async function() {
    let response = await fetch('https://kiei451.com/api/rides.json')
    json = await response.json()
    renderRides(arrayProcesser (json , "Noober XL"))
  })
  let button5 = document.querySelector('#noober-x-filter')
  button5.addEventListener('click', async function() {
    let response = await fetch('https://kiei451.com/api/rides.json')
    json = await response.json()
    renderRides( arrayProcesser (json , "Noober X"))
  })

}




window.addEventListener('DOMContentLoaded', pageLoaded)
  
  // filter API
  // fetch rides
  // filter rides into 5 different arrows
  // render rides function and spit out the rides
  // link each button into event listner


