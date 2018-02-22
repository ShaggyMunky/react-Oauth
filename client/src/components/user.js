import React, {Component} from "react";
import axios from "axios";

class User extends Component {

    async getUser(){
        const user = await axios.get("/api/current-user");

        console.log("current user", user.data)
    }

    async logOut(){
        const result = await axios.get("/api/logout");

        console.log("LOGGED OUT ", result.data)
    }

    render(){
        return(
            <div>
                <h1>User</h1>
                <a href="/auth/google">Login with DA Google</a>
                <hr/>
                <button onClick={this.getUser}>Get User info</button>
                <hr/>
                <button onClick={this.logOut}>LOGOUT</button>
            </div>
        )
    }
}

export default User;