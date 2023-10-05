export const sendMail = (email) => {
    window.Email.send({
        SecureToken : "26c14d57-cc81-4bbc-bfdb-21398ec848e5",
        To : 'udeanugheorgheandrei@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}