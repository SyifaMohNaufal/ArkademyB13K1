function validasiNama (name){
    if(name.length >= 4 && /^[A-Z]*$/.test(name)){
      return true
    }else{
      return false
  }
  }
nama = validasiNama("NAMA")
  
  console.log(nama)

  function validasiUmur(age){
    if((/^[0-9]{2}$/).test(age)){
      return true
    }else{
      return false
  }
  }
umur = validasiUmur("99")
  
  console.log(umur)


function validasiUsername(username){
    if((/^[a-z]{4}_[0-9]{3}$/).test(username)){
        return true
    } else {
        return false
}
}
username = validasiUsername("user_123")

console.log(username)