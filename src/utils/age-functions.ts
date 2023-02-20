import { COOKIE_AGE_NAME } from "./constants"
import { getCookie, setCookie } from "./cookies"

export const isAgeCookieExist = () => {
  return !!getCookie(COOKIE_AGE_NAME)?.length;
}

export const isCoockieLegalAge = () => {
  return (getCookie(COOKIE_AGE_NAME) === 'true')
}

export const updateCookieAge = (confirm: boolean) => {
  setCookie(COOKIE_AGE_NAME, JSON.stringify(confirm), 1)
}