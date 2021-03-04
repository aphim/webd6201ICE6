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
        
        /**
         * This method adds a new route to the routing table
         * @param {*} route 
         */
        Add(route)
        {
            this.m_routingTable.push(route);
        }

        /**
         * this method makes a new routing table
         * @param {} routingTable 
         */
        AddTable(routingTable)
        {
            this.m_routingTable = routingTable;
        }

        /**
         * This method finds the index of a route
         * @param {*} route 
         */
        Find(route)
        {
            return this.m_routingTable.indexOf(route);
        }

        /**
         * This method removes a route from the routing table
         * @param {string} route 
         * @returns {boolean}
         */
        Remove(route)
        {
            if(this.Find(route) > -1)
            {
                this.m_routingTable = this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }

        /**
         * This method converts the routing table to a comma seperated string
         */
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

let route = location.pathname;

if (router.Find(route) > -1)
{
    router.ActiveLink = (route == "/") ? "home" : route.substring(1)
}                
else
{   
    router.ActiveLink = "404";
}
