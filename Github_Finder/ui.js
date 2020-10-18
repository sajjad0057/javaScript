class UI{
    constructor(){
        this.profile = document.querySelector('#profile')
    }

    showProfile(user){
        this.clearAlert()
        //console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
        <a href="${user.html_url}" class="btn btn-info btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
        <span class="badge badge-danger">Public Repos : ${user.public_repos}</span>
        <span class="badge badge-success">Public Gists : ${user.public_gists}</span>
        <span class="badge badge-warning">Followers : ${user.followers}</span>
        <span class="badge badge-primary">Followings : ${user.following}</span>
        <hr>
        <ul class="list-group">
        <li class="list-group-item">Company : ${user.company}</li>
        <li class="list-group-item">Website Or Blog : ${user.blog}</li>
        <li class="list-group-item">Location : ${user.location}</li>
        <li class="list-group-item">Member Since : ${user.created_at}</li>
        </ul>

        </div>
        </div>
        </div>
        `

    }
    clearProfile(){
        this.profile.innerHTML = '';

    }
    showAlert(message,className){
        this.clearAlert()
        this.clearProfile()
        let div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(message))
        let container = document.querySelector('.searchContainer');
        let search  = document.querySelector('.search')
        container.insertBefore(div,search)

    }

    clearAlert(){
        let currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove()
        }
    }

}



