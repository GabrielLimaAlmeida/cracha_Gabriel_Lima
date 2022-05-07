

      const linksSocialMedia = {

        github:"GabrielLimaAlmeida",
        youtube:"jakelinygracielly",
        facebook:"BIEL.974465305",
        instagram:"biel_lima2001",
        twitter:"maykbrito"
       }
       function changeSocialMediaLinks(){
         for (let li of socialLinks.children) {
           const social = li.getAttribute('class')
 
           li.children[0].href=`https://${social}.com/${linksSocialMedia[social]}`       
           
          }
 
       }
       changeSocialMediaLinks()

       function getGitHubProfileInfos(){
         const url= `https://api.github.com/users/${linksSocialMedia.github}`

         fetch(url)
         .then(response => response.json())
         .then(data =>{
           userBio.textContent = data.bio
          foto.src =data.avatar_url

         })

       }
       getGitHubProfileInfos()