
export function generateRandomPassword() {
   const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
   let password = ''

   for (let i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
   }

   return password
}