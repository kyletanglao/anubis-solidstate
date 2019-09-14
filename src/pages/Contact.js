import React from 'react';

import Layout from '../components/Layout';


const IndexPage = () => (
  <Layout fullMenu>    
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Contact Us</h2>
          <p>Email one of your beloved CENLA SCCA board members</p>
        </div>
      </header>
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <div className="content">
              <h2 className="major left">Directory</h2>
              
                <div class="">
                <div class="table-wrapper">
                  <table class="left lessBottom"> 
                    <thead>
                      <tr><th>Role</th><th>Name</th><th>Email</th><th>Car</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><b>Regional Executive</b></td><td>Mike Blazek</td><td>mblazek@bellsouth.net</td><td class="breakme">TBA</td></tr>
                      <tr><td><b>Assistant Regional Executive / Activities Chairman</b></td><td>Kyle Tanglao</td><td class="breakme">kyletanglao@gmail.com</td><td>TBA</td></tr>                      
                      <tr><td><b>Secretary</b></td><td>Vacant</td><td class="breakme">Vacant</td><td>Vacant</td></tr>
                      <tr><td><b>Treasurer</b></td><td>Jeff Hoffmann</td><td class="breakme">jeffkh@aol.com</td><td>TBA</td></tr>                      
                      <tr><td><b>Member at large</b></td><td>Alan Merkle</td><td class="breakme">Merkledesigns@Gmail.com</td><td>TBA</td></tr>
                      <tr><td><b>Member at large</b></td><td>Michael Holmes (Jimmy Radiator)</td><td class="breakme">michael.holmes1@cox.net</td><td>TBA</td></tr>
                      <tr><td><b>Member at large</b></td><td>Quinlan Pellicciotti</td><td class="breakme">quinpell@gmail.com</td><td>TBA</td></tr>
                      <tr><td><b>Member at large</b></td><td>Barrett Broussard</td><td class="breakme">Barrettbrou@gmail.com</td><td>TBA</td></tr>


                     </tbody>
                  </table>
                  </div>       
                </div>                  
            </div>
          </div>
        </section>                           
      </section>
    </section>
    
  </Layout>
);

export default IndexPage;
