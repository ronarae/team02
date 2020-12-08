import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {shareReplay} from "rxjs/operators";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})

export class SessionSbService {
  public readonly REST_BASE_URL = environment.BACKEND_URL;

  private readonly BS_TOKEN_NAME = "AE_SB_AUTH_TOKEN";
  public currentUserName: string = null;

  constructor(private http: HttpClient, private router: Router) {
    this.getTokenFromSessionStorage();
  }

  isAuthenticated():boolean {
    return this.currentUserName != null;
  }


  signIn(eMail: string, password: string, targetUrl?: string){
    console.log("login " + eMail + "/" + password);
    let signInResponse =
      this.http.post(HttpResponse<User>>(this.BACKEND_AUTH_URL + "authenticate/login",
        {eMail: email, passWord: password},
        {observe: "response"}).pipe(shareReplay(1)));

    signInResponse
      .subscribe(
      response => {
        console.log(response);
        this.saveTokenIntoSessionStorage(
          response.headers.get('Authorization'),
          ((response.body as unknown as User).name
          ));
         this.router.navigate([targetUrl || '/']);
      },
      error => {
        console.log(error);
        this.saveTokenIntoSessionStorage(null, null);
        this.setError(error.error.message);
      }
    )
    return signInResponse;
  }

  signOff() {
    this.saveTokenIntoSessionStorage(null, null);
  }


  // @ts-ignore
  getTokenFromSessionStorage(): string {
    let token = sessionStorage.getItem(this.BS_TOKEN_NAME);
    if (token == null) {
      token = localStorage.getItem(this.BS_TOKEN_NAME);
      sessionStorage.setItem(this.BS_TOKEN_NAME, token);
    }

    if (token != null) {
      let tokenParts = token.split('/');
      this.currentUserName = tokenParts[1];
      return tokenParts[0];
    }
    return null;
  }

  saveTokenIntoSessionStorage(token: string, username: string) {
    let namedToken = token + '/' + username;
    let oldTokenSession = sessionStorage.getItem(this.BS_TOKEN_NAME);
    if (namedToken == oldTokenSession){
      return;
    }
    console.log("New token for " + username + ": " + token);
    if (token == null) {
      this.currentUserName = null;
      let oldLocalToken = localStorage.getItem(this.BS_TOKEN_NAME);
      sessionStorage.removeItem(this.BS_TOKEN_NAME);
      if (oldTokenSession == oldLocalToken) {
        localStorage.removeItem(this.BS_TOKEN_NAME);
      }
    } else  {
      this.currentUserName = username;
      sessionStorage.setItem(this.BS_TOKEN_NAME, namedToken);
      localStorage.setItem(this.BS_TOKEN_NAME, namedToken);
    }
  }


  public errorMessage = null;

  public setError(msg?: string) {
    this.errorMessage = msg;
  }
}
