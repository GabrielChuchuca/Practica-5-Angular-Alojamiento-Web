export interface User {
    //correo: string;
    //password: string;

    cedula: string,
    activo: boolean,
    apellido: string,
    cambioPassword: boolean,
    correo: string,
    nombre: string,
    rol: string

}
  
export interface UserResponse extends User {
    activo: boolean
    apellido: string
    cambioPassword: boolean
    cedula: string
    correo: string
    nombre: string
}