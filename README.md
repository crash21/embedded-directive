# embedded-directive


In the directory with-controller I have implemented an example using controller and everything works fine. 

But in the with-directive folder I try to use ngHandsonTable embedded in another custom directive I have created. 

Somehow the scope doesn't transfer data from custom directive to hot table directive and hot table data is null (ngHandsontable.js line 179 scope.datarows is undefined but in with-controller example its not and get the data from grid.data)
 
 Just run index.html inside every folder to test.
