export default class Settings{
    constructor(){
        this.render()

    }
    
    render(){
        let appElement = document.getElementById('app');
        appElement.innerHTML += `
            <h1 class='text-center'>Settings</h1>
        `
    }
}