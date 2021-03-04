"use strict";

let activeLink = "";

(function(core){
    class Router{
        constructor()
        {
            this.ActiveLink ="";
        }
    
        get ActiveLink()
        {
            return this.m_activeLink;
        }
        set ActiveLink(Link)
        {
             this.m_activeLink = Link;
        }
    
        Add(route)
        {
            this.m_routingTable.push(route);
        }

        AddTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }


        Find(route)
        {
            return this.m_routingTable.indexOf(route);
        }
        Remove(route)
        {
            if(this.Find(route) > -1)
            {
                this.m_routingTable = this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        ToString()
        {
            return this.m_routingTable.toString();
        }

    }
    core.Router = Router;
})(core || (core ={}));

let router = new core.Router();
router.AddTable(["/",
                "/home", 
                "/about", 
                "/services",
                "/contact",
                "/contact-list",
                "projects",
                "register",
                "/login",
                "/edit"]);
