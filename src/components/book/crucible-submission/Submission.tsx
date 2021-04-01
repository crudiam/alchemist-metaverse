import { useState } from "react";
import {Book, Page } from "../Book";




import pure from './images/carousel/pure.png';
import pure_0 from './images/carousel/crucible_pure_0.png';
import pure_00 from './images/carousel/crucible_pure_00.png';
import pure_1 from './images/carousel/crucible_pure_1.png';
import pure_2 from './images/carousel/crucible_pure_2.png';
import pure_3 from './images/carousel/crucible_pure_3.png';
import pure_4 from './images/carousel/crucible_pure_4.png';
import pure_5 from './images/carousel/crucible_pure_5.png';
import pure_6 from './images/carousel/crucible_pure_6.png';
import pure_7 from './images/carousel/crucible_pure_7.png';
import pure_8 from './images/carousel/crucible_pure_8.png';
import pure_9 from './images/carousel/crucible_pure_9.png';

// import ellipsis_1 from './images/ellipsis_1.png';
import ellipsis_2 from './images/ellipsis_2.png';



const demo_images = [
    pure,
    pure_00,
    pure_0,
    pure_1,
    pure_2,
    pure_3,
    pure_4,
    pure_5,
    pure_6,
    pure_7,
    pure_8,
    pure_9,
];

const Submission: React.FunctionComponent = () => {

    const [demoIndex, setDemoIndex] = useState(0);


    // const pages = new Array(10).fill('hello world').map((t, i) => <Page key={`documentation-page-${i}`} >{t}</Page>);

    setTimeout(() => {
        setDemoIndex(demoIndex + 1);
    }, 1000);


    return (
        <Book>
            <Page style={{ margin: 0, padding: '0 !important'}}>
                {demo_images.map((url, index) => (
                    <div key={`demo-image-${index}`} style={{
                        backgroundImage: `url(${url})`,
                        backgroundPosition: 'center center',
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        display: index === demoIndex % demo_images.length ? 'block' : 'none'
                    }} />
                ))}
            </Page>

            <Page>
                <b>Bottle Type:</b> Elipsis | N-Gon | ideas? <br />
                <b>Cork:</b> Wood | Glass | None | Magic <br />
                <b>Bottle Pattern:</b> TBD | TBD | ... N | None <br />
                <b>Neck Pattern:</b> TBD | TBD | ... N | None <br />
                <b>Class:</b> FIRE | WATER | EARTH | AIR <br />
                <b>Tree:</b> <br />
                <small>

                - base length <br />
                - iterations 1-15 (time based curve) <br />
                - branch probability <br />
                - branch angle factor <br />
                - branch length variation <br />
                - branch rotation factor <br />
                - leaf probability (base increased with the # of stake) <br />
                - flower probability (base increased with the # of rewards) <br />
                </small>
                <b>Potion Color:</b> depends on the staked tokens <br />
                <b>Geometry:</b> Randomly generated from seed <br />
                <b>Symbols:</b> Randomly generated from seed <br />
                <b>Background:</b> Randomly selected Pattern from seed <br />
                <b>Other Colors:</b> Randomly selected from seed <br />
            </Page>
            <Page>

                The Crucible. <br />

                For my submission I wanted to have more complete POC but unfortunately time was not 
                on my side.
                <br />
                <br />
                As any accomplished alchemist would do I also have documented my experiments 
                to revisit at a later stage. I knew it would be helpful but didn't know how.
                <br />
                <br />
                <blockquote>
                    <i>The only plan is that there is no plan</i>
                </blockquote>
                <br />

                I think this is really a good line. When I think about alchemists imagine 
                endless experiments, iterations over iterations some failures with occasionally successes 
                but mostly the drive to acheive greatness. 
                <br />

                I wanted to start with no plan and come up with a way to represent one thing 
                that is and has been constant, the time. 

                    
            </Page>

            <Page>
                Tree represents the time that has passed 
                since the mint, every seed gives tree it's own characteristics. it grows by the time 
                passes, leaves and flowers grows if the crucible has stake and rewards inside. Nothing more
                simple and easy. 
                <br />
                that is the only constant part of my project. Everything else can change, even the 
                way we represent the tree but not the characteristics.
                <br />
                <br />
                Whatever we decide to build on top of this basic representation of time is a mystery.
                but if you mint a crucible your NFT image will be the snapshot of the projects state 
                at that point in time. You can choose to update the image in the future but you can never 
                go back to the initial image. Time flows one way my friend.
                <br />

                That is just an idea I had and wanted to share, maybe I will think about it more at 
                some point but now I need to finish this text and submit the work...

               
            </Page>

            <Page>
                <img src={ellipsis_2} alt="ellipsis" />
                <br />

                Here are some details to the current state: <br/> 
                for bottles I wanted to have 2 main types: 
                <ul>
                    <li>Ellipsis (implemented)</li>
                    <li>N-gon (not implemented)</li>
                </ul> 

                Starting with the ellipsis I wanted to demonstrate how it could be built. 
                as you can see in the example all we needed was 7 variables (numbers in range) to be generated 
                from the seed. Same can be applied for N-gon as well (with more variables but the same principle).
                Same way we construct the bottles we can also construct corks and add multiple types, multiple variables per cork ...etc.
            </Page>

            <Page>
                Basically every item we need can be drawn with a bit of math and geometry, the only idea I had to abondon was
                the clothing and patterns on the bottles. That is really hard to do with JS... <br />
                Geometric shapes was being tackled by other submissions so I did not go deep into that topic, 
                from my limited experience we can plug in and do anything we want with them as long as we know what we want to do.
                on that regard I suggest looking at other submissions for merge opportunities.
                same goes for the text and the symbols. I mostly used random generation, adding some 
                meaning into it sounds like a good idea to me but it's for community to decide.
                <br />
                Following is the way I built the tree and also the previous background image I submitted 
                on the basecamp. it's a really good read and a decent challenge. I hope you'll be 
                as amazed as I am with amazing things you can do using fairly simple rules... <a href="http://paulbourke.net/fractals/lsys/">read me</a>
            </Page>
        </Book>
    );
}

export default Submission;