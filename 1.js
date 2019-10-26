function getProfile(){
  return {
    name: 'Syifa Mohammad Naufal',
    address: 'Jl. Kaktus I/13 Taman Cimanggu, Bogor',
    hobbies: ['Travelling','Playing BasketBall'],
    is_married: false,
    school: [{name:'Universitas Brawijaya',year_in:2013, year_out:2019, major:'S1 Teknologi Pangan'}
    ],
    skills: [{
      name: 'Food processing and analysis',
      level: 'Beginner'
    }],
    interest_in_coding: true
  }
}
let profile = getProfile()
console.log(profile)
JSON.stringify(getProfile)