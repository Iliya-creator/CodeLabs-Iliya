export default class Settings{
    constructor(){
        this.render()

    }
    
    render(){
        let appElement = document.getElementById('app');

        appElement.insertAdjacentHTML('beforeend',`
            <h1 class='text-center'>Settings</h1>
        `);
    }
}