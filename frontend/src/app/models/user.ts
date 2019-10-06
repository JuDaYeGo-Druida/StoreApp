export class User {
    constructor(id = '', username = '', password = '', rpassword='', name = '', rol = '') {
        this.id = id;
        this.username = username;
        this.password = password;
        this.rpassword = rpassword;
        this.name = name;
        this.rol = rol;
    }

    id: string;
    username: string;
    password: string;
    rpassword: string;
    name: string;
    rol: string;
}
