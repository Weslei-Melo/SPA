export class Router  {
    routes = {}

    add(link , page){
        this.routes[link] = page;
    }

    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({},"",event.target.href)
        this.handle()
    }
    
    handle(){
        const pathname = window.location.pathname
        // console.log(pathname)
    
        const route = this.routes[pathname] || this.routes['/home']
        // console.log("Antes do FETCH")
        fetch(route)
        .then(data=>data.text())
        .then(html =>{
            document.querySelector('.pages').innerHTML=html
        
            console.log(html)})
    
        
    }
}