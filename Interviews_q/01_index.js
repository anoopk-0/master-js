/*
A closure is a inner function that have access to it's outer function variables, even when the outer function execution is completed.

- advantage of closure: encapsulation
*/
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add(); // This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

/*
Lexical:

Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.
Lexical Environment: Local Memory + Lexical Environment of its Parent

Lexical in general means in a hierarchy or in a sequence. Whenever a new execution context(EC) is created a new lexical environment is created and it is referenced in the local EC in memory space.
*/

/**
IMP:How to scale a website

  -CDN – Content Delivery Network or CDN comes as big rescue if you want scale website. CDN helps you to serve all your static and dynamic assets through its servers across the world. Even if traffic is increasing exponentially, CDN makes sure that all requests are distributed across the world with requests being served from nearest servers. This also decreases load time. Your servers can focus on other stuff.

  -Load Balancing – Load balancing is very effective in scaling a website. As the name suggests, load balancing is a process of distributing network traffic across different servers. In this way, if one server is free then load balancer will direct traffic to that server decreasing the load on current servers. This process is done by using couple of algorithms like round robin, IP hash etc.

  -Caching – Local Caching which involves storing external resources locally and looking up next time when same resources are requested. Centralized Caching focuses on loading data once and sharing it across multiple devices.All can connect to same store and pull in resources, Redis can be using for this purpose
  
  -More servers – It’s a no-brainer. Bigger and better server always help in handling more traffic

  -Reduce Bandwidth usage – Whenever your server receives a lot of traffic, it’s important to decrease bandwidth usage. This effectively leads to increase in page speed, as load on server decreases. This can be done by compressing your code and other resources.
 */
