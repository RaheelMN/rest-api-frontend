This is first React Laravel Project
It is based on Youtube channel "Code with Tony" video title "Laravel Rest API CRUD with React full Tutorial | Laravel react tutorial"

1. Create Project
    React project is created by using command: npm create-react-add rest-api-frontend

2. Packages  
    For themes tailwind is used by running command: npm install -D tailwindcss
    Further tailwind commands can be seen at: https://tailwindcss.com/docs/installation
    Routing package : react-router-dom
    API package: axios
    Message dialog box package: react-toastify
    Icons package: react-icons

4. UseContext
   To use variables and functions in mulitple components a hook useContext is used which is part of react library.
   A wrapper  <SkillProvider> is used around components which can access these variables and functions.
   SkillProvider is functional component which accepts child components as argument and return them using {children}
   SkillContext is of object type createContext(). It is used within component to access variables and functions using
   const {...parameters} = useContext(SkillContext)
   In retun statment of SkillProvider we use <SkillContext.Provider value={{}}> where value contains variables and functions name.

5. Routes
   Navigation bar has buttons which have <link> wrapper such as Home has <Link to="/">Home</Link>.
   Link is part of react-router-dom which corresponds to route.
   Routes and Route are part of react-router-dom
   Routes wrappes around Route component. Route component has path and corresponding element.
   When user press linked button browser goes to Route component in which it is defined and displays correspoding component.
   Navigate function is part of react-router-dom. We give route url as parameter and broswer displays its corresponding component.
   
7. Axios
   To make ajax request React uses axios library. In fetch request, response is in json format and we have use another promise to retreive
   data using response.JSON().
   In axios data can directly be accessed without json parsing.

8. Toastify
   It is used when Skill is successfully added, updated or deleted.
   To use it within component we have to import it using
   import { toast } from "react-toastify";
   To display dialogbox we have to import ToastContainer and its CSS file in parent component.

9. Application
    It is simple CRUD application where Skills can be listed, added, updated and deleted.
   When sending ajax request it is encapsulated with try catch code and if response has status code 422 then it is displayed at console.
   
   
