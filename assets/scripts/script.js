document.getElementById('sidebar-open').addEventListener('click', function(){
    document.getElementById('sidebar').classList.remove('closed')
    document.querySelector('.overlay').style.display = 'block'
})

document.getElementById('sidebar-close').addEventListener('click', function(){
    document.getElementById('sidebar').classList.add('closed')
    document.querySelector('.overlay').style.display = 'none'
})

document.getElementById('overlay').addEventListener('click', function(){
    document.getElementById('sidebar').classList.add('closed')
    document.getElementById('search-box').style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
})

document.getElementById('search-open').addEventListener('click', function(){
    document.getElementById('search-box').style.display = 'flex'
    document.querySelector('.overlay').style.display = 'block'
})

document.getElementById('search-close').addEventListener('click', function(){
    document.getElementById('search-box').style.display = 'none'
    document.querySelector('.overlay').style.display = 'none'
})

