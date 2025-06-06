import "../index.css"
import logo from '../assetsContent/logo.png'
import dark from '../assetsContent/dark.png'
import n from '../assetsContent/n.png'
import Slider from './Slider'


import ep1 from '../assetsContent/ep1.jpg'
import ep2 from '../assetsContent/ep2.jpg'
import ep3 from '../assetsContent/ep3.jpg'
import ep4 from '../assetsContent/ep4.jpg'
import ep5 from '../assetsContent/ep5.jpg'
import ep6 from '../assetsContent/ep6.jpg'
import ep7 from '../assetsContent/ep7.jpg'
import ep8 from '../assetsContent/ep8.jpg'
import ep9 from '../assetsContent/ep9.jpg'
import ep10 from '../assetsContent/ep10.jpg'


import m1 from '../assetsContent/m1.jpg'
import m2 from '../assetsContent/m2.jpg'
import m3 from '../assetsContent/m3.jpg'
import m4 from '../assetsContent/m4.jpg'
import m5 from '../assetsContent/m5.jpg'
import m6 from '../assetsContent/m6.jpg'
import m7 from '../assetsContent/m7.jpg'
import m8 from '../assetsContent/m8.jpg'
import m9 from '../assetsContent/m9.jpg'
import m10 from '../assetsContent/m10.jpg'
import m11 from '../assetsContent/m11.jpg'
import m12 from '../assetsContent/m12.jpg'




const LoginSucess = () => {

  return (
    <div className="sucess">
      <section className='one'>

        <div className="section1 containersec">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="buttons">
            <p>Unlimited Tv shows & Movies</p>
            <button>Join Now</button>
            <button className="signin">Sign In</button>
          </div>
        </div>

      </section>

      {/* Next Section two  */}

      <section className='two'>

        <div className="imgbox">

          <div className="section2 containersec">
            <div className="head">
              <img src={dark} alt="" />
            </div>
            <h1 className="title">Dark</h1>
            <p className="light">2017 | Maturity Rating-A | 3 seasions | Thrillers</p>
            <p>A missing child sets four families on as they unearth a mind-bending mystery that spans three generations.</p>
            <p>
              <b className="light">Starring-</b>Louis Hofmann,Oliver Masucci,Jordis Triebel <br />
              <b className="light">Creators-</b>Baran bo Odar,Jantje Friese
            </p>

          </div>
        </div>

      </section>


      {/* Section Three  */}

      <section className="three">

        <div className="section3 containersec">

          <div className="right">

            <img src={n} alt="" />
            <h4>Watch all you want</h4>


          </div>
          <button>Join Now</button>

        </div>

      </section>

      {/* Section Four */}

      <section className="four">
        <div className="section4 containersec">

          <p>This suspenseful series from Baran bo Odar and Jantie Friese Won a <br />
            Grimme-Presis award for television fiction.</p>

        </div>
      </section>

      {/* Section Five */}

      <section className="five">
        <div className="section5 containersec">

          <div className="head">
            <p>Video <span>| Dark </span></p>
          </div>

          {/* Swiper */}

          <Slider />


        </div>
      </section>


      {/* Section Six */}

      <section className="six">

        <div className="section6 containersec">

          <div className="head">
            <p>Episode <span>| Dark</span></p>
          </div>

          <div className="season">
            <p>Season 1</p>
          </div>

          <div className="about">
            <h3>Release Year: 2017</h3>
            <p>Peter gets a shock. Jonas learns the truth about his family, but there are more surprises still to come . Helge makes a sacrifice.</p>
          </div>

          {/* Episode */}

          <div className="episode ">

            <div className="ones">
              <img src={ep1} alt="" />

              <div className="details">

                <div className="time">
                  <h4>1. Secrets</h4>
                  <p>52m</p>
                </div>
                <div className="about">
                  <p>In 2019, a local boys's disappearance stokes fear in the residents of winden, a small german town with a strange and tragic history.</p>
                </div>
              </div>
            </div>



            <div className="ones">
              <img src={ep2} alt="" />

              <div className="details">

                <div className="time">
                  <h4>2. Lies</h4>
                  <p>45m</p>
                </div>
                <div className="about">
                  <p>When a grim discovery leaves the police baffled, Ulrich seeks a search warrent for the power plant. A mysterious strange checks into the hotel.</p>
                </div>
              </div>
            </div>


            <div className="ones">
              <img src={ep3} alt="" />

              <div className="details">

                <div className="time">
                  <h4>3. Past and Present</h4>
                  <p>45m</p>
                </div>
                <div className="about">
                  <p>Its 1986, and Ulrichs brother, Mads, has been missing for a month. Confussion reins as past and present intermine</p>
                </div>
              </div>
            </div>

            <div className="ones">
              <img src={ep4} alt="" />

              <div className="details">

                <div className="time">
                  <h4>4. Double Lives</h4>
                  <p>45m</p>
                </div>
                <div className="about">
                  <p>Bizarre occurances give charlotte a sense of deva and she suspect peter is hidding something. Franziska snaps when Mangus Confronts her.</p>
                </div>
              </div>
            </div>


            <div className="ones">
              <img src={ep5} alt="" />

              <div className="details">

                <div className="time">
                  <h4>5. Truths</h4>
                  <p>50m</p>
                </div>
                <div className="about">
                  <p>Hannah takes her obession with Ulrich too far. The stranger asks Regins to deliver an important package =. Martha is torn between Jonas and Bartosz..</p>
                </div>
              </div>
            </div>


            <div className="ones">
              <img src={ep6} alt="" />

              <div className="details">

                <div className="time">
                  <h4>6. Sic Mundas Creatus Est</h4>
                  <p>45m</p>
                </div>
                <div className="about">
                  <p>Ulrich look to the past for answerand dredegs  up disturbing family secrets. Armes with new tools, Jonas probes the caves's murky depths</p>
                </div>
              </div>
            </div>

            <div className="ones">
              <img src={ep7} alt="" />

              <div className="details">

                <div className="time">
                  <h4>7. Past is Past </h4>
                  <p>54m</p>
                </div>
                <div className="about">
                  <p>Ulrich questions a frall and frighting heldge in the nursing home. Jonas searches for Mikkel, but the stranger warns his about meddding with the past</p>
                </div>
              </div>
            </div>


            <div className="ones">
              <img src={ep8} alt="" />

              <div className="details">

                <div className="time">
                  <h4>8. As You Sow, So You Shall</h4>
                  <p>55m</p>
                </div>
                <div className="about">
                  <p>In 1953, the disfigured bodies of two boys are exhumed at a constructions site, the furture locations of winden's nuclear power plant</p>
                </div>
              </div>
            </div>


            <div className="ones">
              <img src={ep9} alt="" />

              <div className="details">

                <div className="time">
                  <h4>9. Everything Is Now</h4>
                  <p>45m</p>
                </div>
                <div className="about">
                  <p>Ulrichruns afoul of the law, Heldge tries to dodge from Tiedmann, Claudia harnesses the cave's powers, and katharins lashes out at humann</p>
                </div>
              </div>
            </div>


            <div className="ones">
              <img src={ep10} alt="" />

              <div className="details">

                <div className="time">
                  <h4>3. Past and Present</h4>
                  <p>51m</p>
                </div>
                <div className="about">
                  <p>Peter gets a shock.Jonas learns the truth aout is family,nut there are more  surprise still to coe. Helge makes a sacrifice</p>
                </div>
              </div>
            </div>




          </div>


        </div>

      </section>


      {/* Section Seven */}

      <section className="seven">
        <div className="section7 containersec">

          <div className="head">
            <h1>More Details</h1>

          </div>

          <div className="moredetails">

            <div className="watch">
              <h3>Watch Offline</h3>
              <p>Available to download</p>
            </div>

            <div className="watch">
              <h3>Geners</h3>
              <p>Tv Dramas, German,Sci-Fi Tv, Tv Mysterious,Crime Tv Show,Tv Thrillers</p>
            </div>

            <div className="watch">
              <h3>This Show is....</h3>
              <p>Mind-Bending,Chilling,Ominous</p>
            </div>

          </div>

          <h3 className="casthead">Cast</h3>

          <div className="moredetails">
            <div className="cast1">
              <ul>
                <li>Masucci</li>
                <li>Louis Hofmann</li>
                <li>Louis Hofmmann</li>
                <li>Maja Schone</li>
              </ul>
            </div>

            <div className="cast1">
              <ul>
                <li>Ko=aroline Eichhorn</li>
                <li>Sebastian Rudolph</li>
                <li>Anatole Taubman</li>
                <li>Mark Waschie</li>
                <li>Stephan Kampwirth</li>
              </ul>
            </div>

            <div className="cast1">
              <ul>
                <li>Anne Ratte</li>
                <li>Andreas Pietschmann</li>
                <li>Lisa Vicari</li>
                <li>Angela Winkler</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Section Eight */}

      <section className="eight">
        <div className="section8 containersec">

          <div className="eight-head">
            <h1>More like this</h1>
          </div>

          <div className="morelike">

            <div className="more1">
              <img src={m1} alt="" />
            </div>

            <div className="more1">
              <img src={m2} alt="" />
            </div>

            <div className="more1">
              <img src={m3} alt="" />
            </div>

            <div className="more1">
              <img src={m4} alt="" />
            </div>



            <div className="more1">
              <img src={m5} alt="" />
            </div>

            <div className="more1">
              <img src={m6} alt="" />
            </div>

            <div className="more1">
              <img src={m7} alt="" />
            </div>

            <div className="more1">
              <img src={m8} alt="" />
            </div>

            <div className="more1">
              <img src={m9} alt="" />
            </div>

            <div className="more1">
              <img src={m10} alt="" />
            </div>

            <div className="more1">
              <img src={m11} alt="" />
            </div>

            <div className="more1">
              <img src={m12} alt="" />
            </div>
            
          </div>

        </div>
      </section>



    </div>






  )
}

export default LoginSucess