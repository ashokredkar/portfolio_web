import React, { useEffect, useRef, useState } from 'react'
import cover_img from '../assets/utopia_cover.png'
import fein from '../assets/fein.mp3'
import { BsSpotify } from 'react-icons/bs'
import { PiWaveformBold } from 'react-icons/pi'
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const About = () => {
  var today = new Date();
  const hours = today.getHours() > 12 ? today.getHours()-12 : today.getHours();
  const timeUnit = today.getHours() > 12 ? "PM" : "AM";
  const chatTime = `${hours<10 ? "0" : ""}${hours}:${today.getMinutes()} ${timeUnit}`;
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(false);
  const [showChat1, setShowChat1] = useState(false);
  const [showChat2, setShowChat2] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const chatFirst = () => {
    var today = new Date();
    setShowInput1(false);
    setShowChat1(true);
    setShowInput2(true);
  }
  const chatSecond = () => {
    setShowInput2(false);
    setShowChat2(true);
  }

  useEffect(() => {
    musicPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [musicPlaying]);
  

  return (
    <section id="about">
      <div className="container">
        <audio ref={audioRef} controls autoPlay onEnded={() => setMusicPlaying(false)}><source src={fein} type="audio/mp3" /></audio>
        <h1 className='section_title'><span>02 </span>ABOUT</h1>
        <div className="about_chat">
          <div className='separator'><span />18.08.2001<span /></div>
          <div className="chat_msg received">
            <label>🙃 ChatGPT</label>
            <div>
              <p>Hey there, my name is Ashok Redkar, a passionate and dedicated frontend developer with a flair for crafting immersive user experiences. With a strong foundation in HTML, CSS and JavaScript, I thrive on turning intricate designs into seamless, interactive websites. I believe in the power of clean code and responsive design to ensure that every user, on any device, can enjoy a smooth and engaging journey.</p>
              <span>04:55 AM</span>
            </div>
          </div>
          {showInput1 && ( <div className="chat_input">
              <input type="text" value={"Tell me more..."} readOnly />
              <button className="custom_btn" onClick={chatFirst}>Send</button>
            </div> )}
          
          { showChat1 && (
            <>
            <div className='separator chat_first_msg' data-aos="fade-up"><span />{today.getDate()}.{today.getMonth() + 1}.{today.getFullYear()}<span /></div>
            <div className="chat_msg sent chat_first_msg" data-aos="fade-left">
              <label>Anonymous 🙄</label>
              <div>
                <p>Tell me more...</p>
                <span>{chatTime}</span>
              </div>
            </div>
            <div className="chat_msg received chat_first_msg" data-aos-delay="400" data-aos="fade-right">
              <label>🙃 Actually Me</label>
              <div>
                <p>Okay, so I call myself a Frontend Developer based in India. </p>
                <span>{chatTime}</span>
              </div>
            </div>
            <div className="chat_msg received chat_first_msg" data-aos-delay="400" data-aos="fade-right">
              <label>🙃 Actually Me</label>
              <div>
                <p>I was born and bought up in Mumbai, completed my SSC and HSC from Maharashtra Boards where i secured 91% and 54% respectively. And yes, I’m aware of the huge precentage difference, not proud of it really😶<br />Also, I did my graduation from Mumbai University in BSc IT and scored an overall CGPA of 8 percentile.</p>
                <span>{chatTime}</span>
              </div>
            </div>
            <div className="chat_msg received chat_first_msg" data-aos-delay="400" data-aos="fade-right">
              <label>🙃 Actually Me</label>
              <div>
                <p>Apart from my technical skills, some of my hobbies include playing online games, carrom, cricket and all the stuff related to music. YEAH.</p>
                <span>{chatTime}</span>
              </div>
            </div>
            <div className="chat_msg received chat_first_msg" data-aos-delay="400" data-aos="fade-right">
              <label>🙃 Actually Me</label>
              <div>
                <p>Current Favourite Song...</p>
                <section className="music_box">
                  <img src={cover_img} alt="Utopia Album Cover" />
                  <div>
                    <BsSpotify className='spotify_icon' />
                    <span className='play_pause' onClick={() => setMusicPlaying(!musicPlaying)}>{musicPlaying ? <BsPauseCircleFill /> : <BsPlayCircleFill />}</span>
                    <div>
                      <span><PiWaveformBold />{ musicPlaying ? "Now Playing" : "Last Played"}</span>
                      <h4>FE!N (feat. Playboi Carti)</h4>
                      <label>Travis Scott</label>
                    </div>
                  </div>
                </section>
                <span>{chatTime}</span>
              </div>
            </div>
            </>
          )}
          {showInput2 && ( <div className="chat_input chat_first_msg" data-aos="fade-up">
            <input type="text" value={"Tell me more..."} readOnly />
            <button className="custom_btn" onClick={chatSecond}>Send</button>
          </div> )}
          { showChat2 && (
            <>
          <div className="chat_msg sent chat_second_msg"  data-aos="fade-left">
            <label>Anonymous 🙄</label>
            <div>
              <p>Tell me more...</p>
              <span>{chatTime}</span>
            </div>
          </div>
          <div className="chat_msg received chat_second_msg" data-aos-delay="400"  data-aos="fade-right">
            <label>🙃 Actually Me</label>
            <div>
              <p>Peace ✌️</p>
              <span>{chatTime}</span>
            </div>
          </div>
          </>
          )}
        </div>
      </div>
    </section>
  )
}

export default About