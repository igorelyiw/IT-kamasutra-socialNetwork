export type ContactsType = {
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
  github: string,
}
export type PostType = {
  id: number,
  message: string,
  like: number
}
export type PhotosType = {
  small: string | null,
  large: string | null
}
export type ProfileType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: ContactsType,
  photos: PhotosType
}
export type UsersType = {
  name: string,
  id: number,
  photos: PhotosType,
  status: string | null,
  followed: boolean,
}