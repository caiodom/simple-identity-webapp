export class LocalStorageUtils{

    public getUser(){
        return JSON.parse(localStorage.getItem('login.user'));
    }

    public getUserToken():string{
        return localStorage.getItem('login.token')
    }

    public saveUser(user:string){
        localStorage.setItem('login.user',JSON.stringify(user))
    }

    public saveUserToken(token:string){
        localStorage.setItem('login.token',token);
    }

    public saveLocalUserData(response: any){
        this.saveUserToken(response.accessToken);
        this.saveUser;
    }

    public clearUserToken(){
        localStorage.removeItem('login.token');
        localStorage.removeItem('login.user');
    }

}