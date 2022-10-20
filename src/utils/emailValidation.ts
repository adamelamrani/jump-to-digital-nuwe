export const emailValidation = (userEmail: string) => {
  const reg = /^\w+([+-_]?\w+)*@\w+([+-_]?\w+)*(\.\w\w+)+$/;
  if (userEmail.match(reg)) {
    return true;
  }
};
