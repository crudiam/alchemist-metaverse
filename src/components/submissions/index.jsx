import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import AVideo from './sources/a.mp4';
import AImage1 from './sources/A1.png';
import AImage2 from './sources/A2.png';
import AImage3 from './sources/A3.png';
import BImage from './sources/B.png';
import EVideo1 from './sources/videoE1.mp4';
import EVideo2 from './sources/videoE2.mp4';
import EVideo3 from './sources/videoE3.mp4';
import EVideo4 from './sources/videoE4.mp4';
import EVideo5 from './sources/videoE5.mp4';
import F1 from './sources/F1.mp4';
import F2 from './sources/F2.jpg';
import F3 from './sources/F3.gif';
import F4 from './sources/F4.gif';
import F5 from './sources/F5.gif';
import F6 from './sources/F6.jpg';
import F7 from './sources/F7.jpg';
import F8 from './sources/F8.jpg';
import F9 from './sources/F9.jpg';
import G1 from './sources/G1.gif';
import h1 from './sources/h1.png';
import h2 from './sources/h2.png';
import h3 from './sources/h3.png';
import h4 from './sources/h4.png';
import h5 from './sources/h5.png';
import h6 from './sources/h6.png';
import h7 from './sources/h7.png';
import h8 from './sources/h8.png';
import h9 from './sources/h9.png';
import h10 from './sources/h10.png';
import h11 from './sources/h11.png';
import h12 from './sources/h12.png';
import h13 from './sources/h13.png';
import h14 from './sources/h14.png';
import h15 from './sources/h15.png';
import h16 from './sources/h16.png';
import h17 from './sources/h17.png';
import h18 from './sources/h18.png';
import h19 from './sources/h19.png';
import h20 from './sources/h20.png';
import h21 from './sources/h21.png';
import i1 from './sources/i2.mp4';
import i2 from './sources/i3.mp4';
import i3 from './sources/i4.mp4';
import i4 from './sources/i5.mp4';
import i5 from './sources/i6.mp4';
import j1 from './sources/j1.png';
import j2 from './sources/j2.png';
import m1 from './sources/m1.jpg';
import m2 from './sources/m2.png';
import m3 from './sources/m3.png';
import m4 from './sources/m4.png';
import m5 from './sources/m5.png';
import m6 from './sources/m6.png';
import m7 from './sources/m7.png';
import m8 from './sources/m8.png';
import m9 from './sources/m9.png';
import m10 from './sources/m10.png';
import m11 from './sources/m11.png';
import m12 from './sources/m12.gif';
import m13 from './sources/m13.gif';
import m14 from './sources/m15.gif';
import m15 from './sources/m16.gif';
import n1 from './sources/n1.mov';
import n2 from './sources/n2.mov';
import n3 from './sources/n3.mov';
import n4 from './sources/n4.mov';
import p1 from './sources/p1.jpg';
import p2 from './sources/p2.mp4';
import q1 from './sources/q1.jpg';
import q2 from './sources/q2.png';
import q3 from './sources/q3.png';
import r1 from './sources/r1.mp4';

const StyledSubmissionsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;

    > button {
        width: 5%;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
        outline: 0;
        border: 0;
        border-radius: 0;

        color: #DAA520;
    }
`;


const StyledSubmission = styled.div`
    width: 70%;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    padding: 2em 0;
    box-sizing: border-box;
`;

const StyledSubmissionLeft = styled.div`
    width: 60%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 2em 1em;

    background-color: #FBE5AF;
    background-image: 
        url("/assets/img/beige-paper.png"), 
        linear-gradient(
            to right, 
            rgba(175,113, 67,0.4), 
            rgba(175, 113, 67, 0.1) 11%, 
            rgba(0, 0, 0,0) 35%, 
            rgba(175, 113, 67, 0.1) 65%
        );
    box-shadow: 
        inset 0 0 75px rgba(175, 113, 67,0.3), 
        inset 0 0 20px rgba(175, 113, 67,0.4), 
        inset 0 0 30px rgba(175, 113, 67,0.8);


    > * {
        max-width: 85%;
        margin: 1em 0;
    }

    
    overflow-y: auto;

    &::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0.1);
    }

    
    &::-webkit-scrollbar {
        width: 5px;
        background-color: rgba(0,0,0,0.1);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(120, 94, 58, 1);
        border: 1px solid #3b3629;
    } 



    > iframe {
        min-height: 100%;
    }

`;


const StyledSubmissionRight = styled.div`
    width: 40%;
    position: relative;
    box-sizing: border-box;

    color: rgba(120, 94, 58, 1) !important;
    background-color: #FBE5AF;
    background-image: 
        url("/assets/img/beige-paper.png"), 
        linear-gradient(
            to right, 
            rgba(175,113, 67,0.4), 
            rgba(175, 113, 67, 0.1) 11%, 
            rgba(0, 0, 0,0) 35%, 
            rgba(175, 113, 67, 0.1) 65%
        );
    box-shadow: 
        inset 0 0 75px rgba(175, 113, 67,0.3), 
        inset 0 0 20px rgba(175, 113, 67,0.4), 
        inset 0 0 30px rgba(175, 113, 67,0.8);

    padding: 1em 3em;
    box-sizing: border-box;


    > h1, h2 {
        text-align: center;
        margin: 0.5em;
    }

    > span {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 1em;

        > a {
            text-decoration: none;
            color: #996515;
        }
    }
`;

const StyledSubmissionList = styled.div`
    color: rgba(120, 94, 58, 1) !important;
    flex-grow: 0;
    flex-shrink: 0;
    background-color: #FBE5AF;
    background-image: 
        url("/assets/img/beige-paper.png"), 
        linear-gradient(
            to right, 
            rgba(175,113, 67,0.4), 
            rgba(175, 113, 67, 0.1) 11%, 
            rgba(0, 0, 0,0) 35%, 
            rgba(175, 113, 67, 0.1) 65%
        );
    box-shadow: 
        inset 0 0 75px rgba(175, 113, 67,0.3), 
        inset 0 0 20px rgba(175, 113, 67,0.4), 
        inset 0 0 30px rgba(175, 113, 67,0.8);

        
    margin: 2em 0;
    box-sizing: border-box;
    width: 20%;
    padding: 2em ;

    > p {
        padding: 0.5em 0;
        font-size: 1em;
        line-height: 2em;
        /* border-bottom: 1px solid black; */
        border-bottom: 1px solid rgba(120, 94, 58, 0.4);
        cursor: pointer;

        &:hover {
            border-bottom: 1px solid rgba(120, 94, 58, 0.9);
        }

        > b {
            font-size: 2em;
            margin-right: 0.5em;
            margin-top: -0.2em;
        }
    }

`;

const StyledId = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 40px;
    border: 1px solid rgba(175, 113, 67, 0.8);
    border-radius: 50%;
    left: -50px;
    top: 20%;
    color: #3B3629;

    background-color: #FBE5AF;
    background-image: 
        url("/assets/img/beige-paper.png"), 
        linear-gradient(
            to right, 
            rgba(175,113, 67,0.4), 
            rgba(175, 113, 67, 0.1) 11%, 
            rgba(0, 0, 0,0) 35%, 
            rgba(175, 113, 67, 0.1) 65%
        );

    box-shadow: 
        inset 0 0 75px rgba(175, 113, 67,0.3), 
        inset 0 0 20px rgba(175, 113, 67,0.4), 
        inset 0 0 30px rgba(175, 113, 67,0.8),
         0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
;

`;

const StyledDescription  = styled.div`
    padding: 4em 2em;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 70%;
    max-width: 100%;
    flex-grow: 0;


    > p {
        margin: 0.5em 0;
    }


    &::-webkit-scrollbar-track {
        background-color: rgba(0,0,0,0.1);
    }

    
    &::-webkit-scrollbar {
        width: 5px;
        background-color: rgba(0,0,0,0.1);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(120, 94, 58, 1);
        border: 1px solid #3b3629;
    }

`;


const Submission = ({submission}) => {



    return (
        <StyledSubmission>
            <StyledSubmissionLeft>
                {submission.demoUrl && (
                    <iframe src={submission.demoUrl} title={submission.name} width="100%" height="100%"></iframe>
                )}
                {submission.videos && submission.videos.map((src, index) => (

                    <video key={`submission-video-${index}`} controls >
                        <source src={src} />
                    </video>
                ))
                }

                {
                    submission.images && submission.images.map((src, index) => (
                        <img src={src} key={`submission-image-${index}`} alt={`submission-${index}`}/>
                    ))
                }



            </StyledSubmissionLeft>
            <StyledSubmissionRight>
                <StyledId>{submission.letter}</StyledId>

                <h1>{submission.name}</h1>
                <h2>{submission.creator}</h2>
                <span>
                    <a target='_blank' rel="noreferrer" href={submission.link}>basecamp</a>
                    {submission.file  && <>
                        &nbsp; | &nbsp;
                        <a target='_blank' rel="noreferrer" href={submission.file}>file</a>
                    </>}
                </span>


                <StyledDescription>
                    <ReactMarkdown children={submission.description} /> 
                </StyledDescription>
                
                
            </StyledSubmissionRight>
        </StyledSubmission>
    );
}


const Submissions = () => {
    const [currentSubmission, setCurrentSubmission] = useState(0);

    const mappedSubmissions = submissions.map((s, i) => <Submission key={`submission-${i}`} submission={s} />);

    const next = () => {
        setCurrentSubmission(currentSubmission + 1);
    }


    const prev = () => {
        const curr = currentSubmission -1;
        setCurrentSubmission(curr === -1 ? submissions.length : curr);
    }


    const submissionsList = submissions.map((s, i) => (
        <p key={`submission-list-item-${i}`} onClick={() => setCurrentSubmission(i)}>
            <b>{s.letter}</b> {s.name} <small>{s.creator}</small>
        </p>
    ));

    return (
        <StyledSubmissionsWrapper>
            <button onClick={prev}> &#8668; </button>
            <StyledSubmissionList>
                {submissionsList}

            </StyledSubmissionList>
            {mappedSubmissions[currentSubmission % (submissions.length)]}
            <button onClick={next}> &#10239; </button>
        </StyledSubmissionsWrapper>
    );
};


export default Submissions;


const submissions = [
{
    creator:  'Vasco',
    name: 'TheCrucibleMachine',
    link: 'https://public.3.basecamp.com/p/5UtD1Z5Easvde7LaT4LQzRTH',
    letter: 'A',
    videos: [AVideo],
    description: `Hello this is my submission to the Crucible NFT Art , was a little late for finishing the video ,since i joined the competition way too late, but hope u enjoy it anyways  , took some of the inspiration from " His dark materials " tv show alethiometer wich seemed like a perfect gadjet for a certified alchemist ( or any alchemist ) , in this specific example i wanted to show how you could dial in the machine so that you could mint a crucible , as soon as the TX is generated your Crucible pops out , Enjoy 


PS. Full video with all the nice details comming soon! 
    `,
    twitter: 'https://twitter.com/_Vazk0_',
    images: [AImage1, AImage2, AImage3]

},
{

    creator: 'NameCitta', name: 'Alchemist NFT design concept',
 link: 'https://public.3.basecamp.com/p/pEm9DpscnEQJxvhJTLH8zcNf',
    letter: 'B',
    images: [BImage],
    description: `Hello fellow Alchemists!

On March 17th, I posted my initial ideas/concepts for a proposed plan to merging of historical alchemical references and elements into a progressive reveal and development system that can be incorporated into the tokenomics of the Alchemist Coin/MIST universe that I believe would enhance not only interest in MIST as a project but would also enhance long term duration of LP staking, the value of the NFTs and also just the coolness of the project a whole.

Unfortunately, my father is an elderly veteran who was hospitalized shortly after my last post (note to self...Don't Get Old) and I've been too consumed with hospital/nursing home arrangements to have any time to further develop my ideas.

So with apologies I would like to submit to the contest for your consideration my earlier writeup as a submission, along with a few comments and thoughts.  I have very much enjoyed viewing everyone's submissions while I've been on the zoom calls and phone calls with the doctors and hospital staff, and in seeing all of the wonderful work that everyone is doing I've had a few thoughts:

1.  Some of the art submitted are beautiful "painting-like" artwork that is cool/beautiful, etc, but not easily changeable, modifiable, customizable to make each NFT instance unique.
2.  Some of the art is computer generated and is cool and could easily be cusomiizable, changed, etc, but very distinctly focused on a specific Alchemy element (a beaker, a circle, a hex, an element sign, etc) but these individual elements on their own lack the overall effect of the painting like artwork.
3.  All of the submissions are really cool.  Collectively.  But no one single concept itself wholly captures the Essence of the Alchemist Way.

So I had a few thoughts about an overall system that could make a full and coordinated use of each of these elements to their full potential, (and bear with me as I type this out stream of consciousness-like due to lack of time):

1.  Each NFT would have two sides.  The Back side would display an artwork element (thus making full use of those submissions that fall into the "artwork" category) and the Front side would include Alchemist related graphics that display information about the LP, etc that also makes use of some of the cool renderings that have been submitted. 

2.  Pardon my terrible drawing, but the front side could diplay something like this:


Where for example the upper left corner could incorporate the cool art elements that have been submitted identifying whether the NFT is Earth, Air, Water or Fire, the upper right displays the amount of the LP (using a cool bubble graphic showing the level of the LP), the lower left would have a clockwork element that displays the length of time staked (or also the timign to the next 2 week reward period) and the lower right could display a reward bonus, etc.  The center would display  the type of NFT (per my proposal on March 17th, I have proposed three classes of NFTs, i.e. Crucibles, Tomes and Alchemist Mentors).

I think dividing the front and back surfaces of the NFT in this way could make full use of both the "full artwork" submissions as well as the "cool rendered crucible/Element/etc" type modificable elements.   Sadly, I lack the artistic skills to render the images I see so clearly in my mind.

On March 17th, (copied below), I proposed that Alchemist NFTs would fall in three classes representing the three major elements of the Alchemist Way, i.e. 1) the Crucible (representing the chemical transmutation process/tools, etc) 2) the Tome (representing the knowledge, spells, research etc necessary to pursue the Philosopher's Stone) and 3) the Mentor (representing the Ancient Wise Alchemists from whom the Alchemist must learn their craft to advance the Knowledge).

In my concept, Alchemists could mint a Crucible, a Tome or a Mentor, and each of these Crucibles, Tomes andj/or Mentors would be associated with one of the Four Elements (i.e. an Earth Crucible, Earth Tome, Earth Mentor, Fire Crucible, etc).   In my concept, LP creation could be structured so that new MIST LPs would be associated with a particular element, i.e. a MIST/BTC LP could be assigned to generate Earth Crucibles/Tomes/mentors, MIST/LINK could generate Fire Crucibles/Tomes/Mentors, etc.

In my concept, the Alchemst who mints a Crucible, a Tome and a Mentor then could use these three to mint a specified "result" NFT, i.e. an Insight, a Formula, an Invention/Artifact, a Philosophy, etc.   

In my concept, the resulting Insight, Invention, Formula, Artifact, etc could be numbered and could contribute collectively to those minted by the other Alchemists to contribute collectively to the gradual reveal of the ulitmate Philosophers Stone.

What I like about these concepts is that they provide an overall structure/framework that would utilize ALL of the different styles of art that everyone has submitted, and would present an ongoing and evolving, progressive unfolding of the Project that could continue to make full use of the very cool Alchemist theme.

And overall, I believe this structural approach to the Alchemist NFTs allows us to thoroughly explore all of the cool historical ancient alchemy elements....including runes, ancient tech/artifacts, clockwork elements (like the Antikyera Mechanism), mysterious manuscripts and languages/fonts (like the Voyenich Manuscript), astrology, and the actual historical alchemists, and all of these elements can play a useful role in the calculation of bonuses as Alchemists mint their progression of NFTs.

Some of the other possibilities:

a.  Certian element combinations of Crucible/Tome/Mentor allows minting of specifice element/alloy/artifact/insight NFTs
b.  Certain element combinations of Crucible/Tome/Mentor allows certain specific bonuses  (maybe Water Crucible/Tome/Mentor mints an NFT with enhanced time duration bonus, Fire elements mint perhaps an enhanced percentage genration of a rare NFT, etc)

Sigh.  I have a lot more ideas that I just don't have time to write up, so I'll just have to submit this now.

It has been a real pleasure following everyone's progress.  It has been a welcome distraction while I've been struggling through endless conference/zoom calls to get my Dad the care that he needs.

Thank you for your consideration, and thanks for not laughing too loud at my childish drawing above  :)

Thanks

Nama Citta

And Here is a cut and past of my submission on March 17th:


Goals:

1.  To craft MIST’s tokenomics and artwork interactions of users in working with the MIST token as much as possible to the actual exploration that the Alchemists performed in search of the Philosopher's Stone...so MIST holders' progress and deepening interaction in investing in MIST actually feels like the alchemical exporation and experimentation that Isaac Newton was engaged in....
2.  Skillfully incorporating interesting thematic graphic design into a progressive reveal that enhances the depth and storyline of the alchemical theme as the project develops and progresses (more on this in a bit).
3.  Expansion of the Crucible NFT concept to include additional NFTs in conjunction with the storyline to accomplish the dual objectives of a) enhancing/deepening the mystique of the alchemical storyline and b) maintaining investor engagement in the program and encouraging ongoing creation of NFTs, minting etc. by creating increasingly more interesting and compelling incentives to create NFTs.

Initial Ideas/Concepts to Accomplish these Goals:

1.  Creating an interesting Engagement Path for progressive NFT minting.   I love the project's innovative use of the Crucible.  My thought is to expand on this in a manner that deepens the Alchemist theme and encourages more NFT minting.   My thought to do this is to expand and use the Crucible code to have several classes of "Crucibles" that are themed to several essential elements of the Alchemical pursuit of the Philosopher's Stone.  At present, I envision three essential "NFT Elements", which are core necessary elements the Alchemist needs to grow and succeed:   a)  The Crucible (V1 and later versions) .. i.e. the "tools" of the Alchemist, b) the Tome (another class of NFT) which represents the Knowledge/Formulas, etc needed by the Alchemist to succeed, and c) the Mentor, which in NFT form would give the project an opportunity to creat NFTs of the famous historical alchemits (and of course some cool fictional alchemists), representing  the high level training the Alchemist needs to succeed.   With the right Graphic Design talent, each of these three elements present rich opportunities to create really cool images for NFTs.

2.  NFT Interaction and Interoperability.  Here I have ideas that may or may not be within the scope of actual coding possibility, but my concept is that in order to pursue The Way, the Alchemist must acquire at least one Crucible, one Tome/Codex, and one Mentor in order to then mint a final NFT of some sort.  I am still working on the imagery and concept for this, but the product of this collection could be grouped perhaps into categories, each of which could be rich opportunities for Graphic Design for NFTs.  For example, perhaps the final NFT product is a Potion, and Alloy (combination of different elements), an Insight, a Gemstone, an Artifact....still working on this.  Overall, I'm also thinking that whatever these final endpoint NFTs are, perhaps we find a way that they must collectively work towards the group NFTs generated by others in the group, and that some how there is a Big Collective development of the Philosopher's Stone that is gradually revealed over time.  From a tokenomics perspective, perhaps we could develop a large enpoint group reward that allows a proportional stake in the final glorious outcome.  Still hashing on this... Some interesting possibilities here with the Mentor NFT, as there are many historical alchemists that could get their own NFT "card", ranked perhaps in rarity to enhance value and enhance coolness of alchemy theme.
3.  Other Historical/Color elements.   Historically the Four Elements were an essential concept in alchemy, i.e. Earth, Air Fire and Water.  I'm thinking that to enhance color, complexity and itneresing combination possibilities, we create a system where each Element has a specific Color and a specific Charateristic, and that each Crucible, Tome/Codex and Mentor is associated with one of these four elements.  This could have interesting possibilites in combinations, i.e. a Water Crucible, Water Tome and Water Mentor yields a strong Water Potion with certain bonuses, and mixing the elements yields lesser bonuses, etc.
4.  Length and Amount of Stake.  I've also posted some thoughts that we might incorporate the amount of LP staked in an NFT and the length of time staked could be have a dynamic effect on the graphics of the NFT.  For example, a Crucible could have an image of a beaker that is 1/4 full with less than 1 ETH value staked, 1/2 full for 1ETH, 3/4 full,,,etc, and the contents deepen in color, luminescence etc as the duration/time of staking increases.
5.  There are also many historical alchemical texts, etc that we could include flavorful elements of into the artwork, the storyline and etc to add depth, mystique and credibility to the build.

These are just a few of my initial thoughts.  I'll flesh this out a bit more when I have a chance, but I wanted to share a few of them now, especially the ideas about having different classes of NFTs as part of the storyline in case that might be interesting to the Devs and if it would be good to think about this sooner rather than later... 
    
    `,
} , 
{

  creator: 'Fiddlekins', name: 'Alchemist Circle Generator',
 link: 'https://public.3.basecamp.com/p/UnavJPmugXbumYT5Ch6UHsse',
 letter: 'C',
 description: `I've made a webapp that will display a Crucible, the particulars generated based on its properties: https://fiddlekins.github.io/alchemist-crucible-lens/

It doesn't look pretty.

The idea is that this will serve as a sufficiently functional foundation that other people can copy and build on top of, swapping out the graphics for their own designs.

Code is here: https://github.com/Fiddlekins/alchemist-crucible-lens

I've tried to make it simple to take this code and adjust it, but some technical skills will still be required alas. Should save mucking about with web3 code to get Crucible data though, which is definitely the bit I found trickiest when coming to it without prior experience.

(Saying that, I have no idea if this works without MetaMask installed and haven't bothered testing)

Among other things, this should serve to demonstrate some of what I outlined in my post here: Generative art based on ID of the NFT?? - Crucible NFT Art

Oh, and if anyone knows what they're doing then suggestions regarding a proper 160bit seeded PRNG would be appreciated. I fudged it to get something working before dawn breaks.

( Twitter: https://twitter.com/Fiddlekins )`,
 
    demoUrl: 'https://fiddlekins.github.io/alchemist-crucible-lens/'


},
{

  creator: 'NaturalGrins', name: 'AlchemistZoo',
    link: 'https://public.3.basecamp.com/p/xqC3UiGabDSZDKDQgJvjyGDV  https://drive.google.com/drive/folders/1e5CX6DgNgbdvEHrbKtdRaGuU_nP4Fx6x?usp=sharing',
    letter: 'D',
    description: `
Alchemist Zoo
Good evening friends, I've just uploaded a submission to the "Docs and Files" section in a new folder called "Alchemist Zoo".  In the Alchemist Zoo: NFTs are individual pieces, but sets also form larger items with unique IDs.  Each piece also has a backside, based on alchemist symbology.  Individual pieces are defined by a set of at least 15 characteristics, each with expandable variants, including, 1) the type of larger item formed by individual NFTs, 2) the unique ID of the larger item, 3) the piece number within the larger item, 4) an alchemist symbol (wherein the famed Philosopher’s stone is the rarest), 5) individual piece design, 6) individual piece design color, 7) individual piece design orientation, 8) animal color(s), 9) animal orientation, 10) animal size, 11) animal sub-type, 12) animal type, 13) alchemist gear sub-type color(s), 14) alchemist gear sub-type, and 15) alchemist gear type.  

This combination of characteristics and variants – including the larger items formed with unique IDs, ensures that variants can always be added, combinations cannot be exhausted, and every NFT will always be unique!

For a complete overview of the Alchemist Zoo see the Alchemist Zoo Overview graphic. 

For examples of close-up NFTs see the NFT_front and NFT_back series. 

For a GIF of close-up NFTs see the Alchemist Zoo GIF file. 

It's incredible seeing all of the submissions coming in and we're thrilled to be part of it - wherever it goes - happy Thursday!

Natural Grins & Friends 
Twitter: NaturalGrins
    
    `
},
{


 creator: 'Isra', name:  'Liquid Logo and ID Info', 
    link: 'https://public.3.basecamp.com/p/qkKTdUkdWt51uLcWXGbPBY4P',
    letter: 'E',
    description: `
Hey guys, lots of amazing submissions on here. However I think the downfall of some of them is the over-complication of the artwork, so I took a different approach. I love the Alchemist logo and felt it would be fitting if the artwork was centered around it. I decided to animate the liquid inside the logo and was pretty happy with the result.

Generative Component:

To make each Crucible unique the colors of the two different liquids will be decided by the ID. I have attached a few examples of what they might look like below. And I’ve added the usual info: Crucible ID and the owner address. This can easily be adjusted if you guys prefer other info. Let me know in the comments what you think should be added.
    

I also made an alternative design for the Crucible info which I don’t like as much but added it in case others disagree.

    `,
    videos: [EVideo1, EVideo2, EVideo3, EVideo4, EVideo5]
},

{


 creator: 'Vincent Krause', name:  'Alchemist’s Shrine',
 link: 'https://public.3.basecamp.com/p/bp5GKuLC7oj7SwVv2paRThak https://drive.google.com/drive/folders/1ocZzdR_HpoluojVePxfoAFg3aN7QTNAn?usp=sharing'
    ,letter: 'F',
    description: `
    
    
Salve Alchemistas!

I am blown away by the variety of artwork in this community, very happy to be a part of it!
Here are my two-cents on what I did:
As a young architect I do a lot of 3d modeling, this time not for some building but for a higher cause: The Alchemist's Shrine!
As a crypto enthusiast and Alchemist I dreamt of a sacred laboratory in the desert; the destination to go on a pilgrimage to, where higher matter is formed:
Prima Materia Non Fungitus!

Would be awesome to expand this oasis into a VR experience, unlockable when minting your crucible or interacting with the protocol. 

In the center of the ring I experimented with visualizing NFT transmutations, from Alchemist to Uniswap/Sushi/Ampleforth.

Hope you guys enjoy this, would be happy to hear your thoughts! :)
Cheers Vincent 
PS - one day the Alchemist's Shrine should be built for/by the community in the physical world! What should it look like, where should it be!?
    
    `,
    images: [F2, F3, F4, F5, F6, F7, F8, F9],
    videos: [F1],
},
{

 creator: 'Nikko Joseph', name: 'The Tincture',
 link: 'https://public.3.basecamp.com/p/yp85ctRRYMZZHrZNDfwpJxeT',
    file: 'https://drive.google.com/drive/folders/1IYBM4Y7-wlwSxrb9jJDCWxcHRKlz7T5S?usp=sharing'
    ,letter: 'G',
    description: `
What’s up my dudes,

My name is Nikko, I’m an entrepreneur from Asia. Pretty new in the crypto space but really dove deep as soon as I got involved. Got super interested in Alchemist which in turn made me code my very first NFT, the v1 crucible ⚗️.
    
My good friend David and I (both crucible holders) wanted to give this Crucible NFT Art Contest a go, so we commissioned an old friend from high school to make a pixel gif of what we thought the crucible/alchemy is all about. 
    
Title: The Tincture
Description: Everything from nothing, where 1’s and 0’s make magic and the only thing that ever mattered was carved from rock and lightning. Inside the crucible, worlds are born and lost, and infinity is just a tiny fraction of what is known. The maps have no edges here. At the hands of an alchemist light becomes dark, ends become beginnings, and the greatest treasure is what has yet to come. The crucible beckons. Its transformation is upon us. Set yourself upon the stone and become dust. Embrace the tincture and let us begin.

*posted the files in the Docs & Files section 🙇🏻‍♂️
    
    `,
    images: [G1]
},

{

 creator: 'David P.', name: 'Scarab and Alembics',
     link: 'https://public.3.basecamp.com/p/woe3kZ2ogEVLkXnmMBDFAFAL'
    ,letter: 'H',

    description: `
The scarab is one of the main symbols of the old arabian alchemists and is actually a dung beetle that turns animal feces into balls that are then used as food for its brood.

He is such a symbol for the alchemy and wisdom of the ancient Egyptians.
Most of the pharaohs wore the scarab as an ornament
Amulet with you, it has a sacred meaning.
The fact that the beetle turns dung into balls and carries it around with it and nourishes others (its brood) from it, became a symbol for the creative power that carries the globe and gives food.



The next aspect I worked on is the that the alchemists were the 
predecessors of chemists and were interested in the "Transmutation" of matter.    

Erlenmeyer flask shoes the dissolve/synthesis of an ETH.

An ancient apparatus with succeeded extraction. 
a coin traded by the old alchemists. ;)
    `,
    images: [
h1,
h2,
h3,
h4,
h5,
h6,
h7,
h8,
h9,
h10,
h11,
h12,
h13,
h14,
h15,
h16,
h17,
h18,
h19,
h20,
h21,
    ]
},

{


 creator: 'Joshua B', name: 'Always Something in the Mist',
  link: 'https://public.3.basecamp.com/p/ZFQ23E1yMZTVQGuFEiPiEyea'
    ,letter: 'I',
    description: `
The concept for my art submission is Geometric emergence. The variants can be generated easily and the characteristics of each can be derived from the ID of the NFT. 

The images can vary in speed, rates of rotation, scale/scaling rate, color hue and overall geometric complexity. Dynamic and Static shapes can also be included. As you can see in some of the videos there are natural slots created to place the Alchemist logo, runic imagery or other iconography on brand with the Alchemist theme.

My thinking is that depending on the comprising contents of a crucible, the symbols injected could vary (So if X or Y coin is present in the Crucible then a modified version of the tokens icon can potentially be added in one of the slots).

Some of the images get quite busy, some generate entire secondary layers via emergence

Having a Crucible generation process which can vary wildly and unpredictably yet still yield generative complexity and geometric emergence when deriving characteristics may support the secondary market of Crucibles as an Item NFT that may be limited or sought after. Whilst all crucibles will work as intended regardless of visual design, some may be much more visually appealing than others, making them more desirable. 

'Reroll' when staking and un-staking with Crucibles would allow end users to un-stake in order to reroll the generated design based on new comprising token content or a modifier count. This gives the user an aesthetic incentive for un-staking and resetting their individual multipliers, and contributing the costs for re-staking back to the Mist ecosystem.

The first video covers multiple forms, the additional videos highlight some selected variants.

Thanks for viewing my submission, I hope you enjoy the videos

(Big thank you to Cryptomando Cryptomando for their help resolving discord issues in time to enter!) 

    `,
    videos: [i1, i2, i3, i4, i5]
},

{


 creator: 'OmegaB',  name: '3d NFT Art',
     link: 'https://public.3.basecamp.com/p/SeVoa9RFgxJcF2zDRKdpqfRk'
    ,letter: 'J',
    description: `
This is my submission for the competition.

My design was based on XactoMundo XactoMundo's idea, although I reduced the number of elements.

As I have seen very intricate and complex submissions, I realized that in addition to not being able to match these people it would be interesting to take a more minimalist approach.

Two aspects are addressed.

Passage of time: the modified Florence flask starts empty, and is filled with time.

The four elements: air, earth, fire and water. They can represent the four exchanges involved (uni, sushi, ampl, Balancer).

Generative art
The texture and color of the element and the circle are variable. So is the color of the maturity fluid. The input that decides the appearance of each of the elements comes from the crucible address.

    
    
    `,
    images: [j1, j2]
},

{


 creator: 'Alchemist_66', name: 'Alchemist Circle Generator',
     link: 'https://public.3.basecamp.com/p/N5XRckc512FixwCxKTsfVQ4U'
    ,letter: 'K',
    description: `
For my final submission I'd like to present this prototype Circle Generator made in p5js. It's obviously rough around the edges, and doesn't have animation or 3D features yet, but is still an executable form of the concept outlined in my RFC. I only made 3 Reaction Array variants, but designing, or even procedurally generating, new ones is less a matter of difficulty than stylistic choice. There are over 20 different fonts and rune sets to give a sense of the of possible customizations.

The source is here. Every click of the play button will generate a new circle with random features.
https://editor.p5js.org/DonaldKrump/sketches/L9VqsL90E
    
    `,
    demoUrl: 'https://editor.p5js.org/DonaldKrump/sketches/L9VqsL90E'
},
{

 creator: 'Crud', name: 'NFT Growing Tree',
  link: 'https://public.3.basecamp.com/p/gGvNmkrFyfyENdKvY54f9ogp'
    ,letter: 'L',
    description: `
I have already posted it previous works  at poc old potion drawings - Crucible NFT Art <- this folder but I wanted to post it here as well.

https://alchemist-crucible-submission.vercel.app/ <- visit this page for additional images and information. 

small update: https://github.com/crudiam/crucible-art <- I've forgotten to put the github link so there you can see my horrible horrible code...

twitter: https://twitter.com/crudiam/
    
    
    `,
    demoUrl: 'https://alchemist-crucible-submission.vercel.app/'


},
{


 creator: 'Borelis', name: 'Pot of Greed',
 link: 'https://public.3.basecamp.com/p/Rp9yyLhETuW8D3cmMdxGaV7Z'
    ,letter: 'M',
    description: `
    I am putting my finished submission at the top as most of the people probably just want to see the art, without going too much into detail. For those who are willing to read what I have in mind – welcome!

Disclaimer:
I resubmitted because I wasn't sure if I uploaded to the right place at first, sorry for inconvenience.

First of all, I want to do a little disclaimer. To be completely honest in the past week I had quite a big exam thus I wasn‘t even aware of the NFT contest. I saw it 40 hours before the end of it, so I and my buddy had to do some speedy work but both of us think it turned out quite well. I want to also mention that I am not a developer and quite new with NFTs so I am not sure what are the limits on creating NFTs by using IDs. Besides that, I present some ideas later but some of them might be completely undoable, if that happens, we are sorry. Also, I want to do a quick shoutout to XactoMundo XactoMundo  who gave an inspiration to work more on this concept. Lastly, English isn't my primary language, so sorry if some parts could be difficult to understand. I will do my best.

So why did we chose this type of style?
Firstly I want to mention that this Alchemist project reminds me of the anime called Full Metal Alchemist. In that universe alchemists often use similar-looking runes/glyphs to combine magic/material to create something new (life, matter, etc.). Thus I thought this sort of glyphs that XactoMundo XactoMundo  represented would actually fit quite well for the crucible as the idea is to create something new. And in order to create something magical you need glyphs, materials, and a little bit of magic. It is similar to creating a crucible - you combine different currencies (materials) on this glyph in order to create a philosopher's stone (crucible, NFT, liquidity pool, however you call). And I think this concept of combining something on the magical symbols fits quite well with the Alchemist narrative.

A little bit more in-depth:
I am not sure how NFTs are generated but I really liked the concept of showing everything you need to know on the actual NFT. For example, both cryptocurrency logos seen on the left and the right (when and if crucible will able to lock various assets), would be shown on the NFT. The little problem with this is that I don‘t know if the creation of the crucible can actually extract information such as a token logo. Besides that, it should go through a specific filter so the image would fit size, place and color pallet. 

Also on the top people could see where the LP‘s are locked (for this example in the Uniswap):

This again raises the same questions, can we extract the images? And will we be able to lock liquidity from other exchanges?

Moving to the top part in this NFT I wrote the potential ID of the token. And here we with my buddy had a discussion on whether there should be the ID of the token or the LP locked. Of course, knowing how much LP is locked would be more beneficial, but we felt that extracting token ID would be a little bit easier for the contract.

As for the bottom for this example, we‘ve put the $MIST token address although having the Crucible creation TXN would serve more purpose as people could do a quick check on how this Crucible was created.

More ideas and concepts:
There was a question on how Alchemist Crucible could use token id to generate different variants and we have come up with few ideas. So what we thought was that contract could take numbers from token id and based on the value choose different shapes/forms on creating inside a circle.
    
So these shapes would be formed using various shape presets. Here are some examples I found from the internet searching Full Metal Alchemist glyphs (again we had 40 hours so didn‘t have enough time to draw ourselves):  
   

So based on the value of the crucible id the contract would pick few (or one) of the preset glyph shapes and combine them into unique glyphs. Then on top of that contract would insert inner and outer circles: 


Finally, combine inner and outer circles. Add by the value generated middle circles and backgrounds AND you should get something like this:


Some bonus ideas:
We also really like that NFTs can be moving objects (video or GIF), sadly we don‘t know how to create GIFs or Videos. But thankfully there is a guy in this group who knows and created a few of them. Shoutout to Alchemist_66 Alchemist_66  who created these gifs (not only that but he is also creating a script that would generate these kinds of glyphs) that would fit perfectly in the mentioned middle circles and give it some liveliness. Also having some color variations based on ID value would give even more possibilities for unique looks. 

Wrapping up:
In conclusion, I just want to say that obviously the concept isn't completely finished. But I feel that Crucible art shouldn‘t be a still image of some kind of potion (no offense to anyone), I believe this NFT should give immediate and all needed information about the crucible and value inside of it. Not only that but it should be a way to create unique and different looks for every person who willing to create a crucible, so It wouldn‘t be only about the value locked inside but also about the visual representation of it. Maybe some crucibles would be traded just for their looks and not the value inside. That being said thank you, everyone, who read this dreadful and long submission, hope you enjoyed it, and remember „The only plan there is no plan“, piece.

Twitter handle: @Borelis4
    `,
    images: [
        m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,
        m11,m12,m13,m14,m15
    ]
},

{


 creator: '0xWap', name: 'Mystic Globe',
 link: 'https://public.3.basecamp.com/p/WGPyQgXhUKSKZBY4x7fwEqYQ ',
 file: 'https://drive.google.com/drive/folders/1Vk8fdiK0jiSMiatcF8BLr0pzoV7Wj_X_?usp=sharing'
    ,letter: 'N',
    description: `
Hello fellow Alchemists, here's my shot at the contest.

I found a bunch of really cool CSS/JavaScript animations and put them into a glass globe suspended by a hand. I think it gives a really cool mystical effect. I also used an application which generates unique Magic Circles called MagiCirGen.
    
    
For the generative aspect I have two possible ideas: either we use MagiCirGen to generate unique magic circles like I did in the one above (they also vary in color). Or we do the whole thing in CSS and JavaScript. See the examples below:

The beauty about using pure CSS and JavaScript to generate the Crucible Artwork is that the implementation would be really easy as the code is super lightweight. 

All the animations above can be adjusted according to the Crucible ID thus making the artwork unique. Color, speed, size of particles, particle decay time are all adjustable and make the animations look quite different and cool. ;)
    
    `,
    videos: [n1, n2, n3, n4]
},

{


 creator: 'Niklavs Trankalis',  name: 'Couldn’t sleep / Vampy Crafts',
 link: 'https://public.3.basecamp.com/p/2hfHdkyGokn2D7i2VWpmycGp',
 file: 'https://drive.google.com/drive/folders/1U8xPshcH7cFNkjB8-m9rhUF5WYcsOUCt'
    ,letter: 'O',
    description: `
    
I have uploaded the submission for the nft's contest in doc files. As mentioned before I can't execute this in code, but from my understanding it is not impossible to make something like this. These are animations of 4 elements, that I made earlier combined with some useful info added on top of the artwork. It displays the owners address along with the current eth and $mist value of the nft. Maybe the owner could chose what info they want to display or hide it somehow. Idea is that these elements could be minted together into a collection of all 4 or less elements based on the contribution to the staking pool or some other reason. There is room to think of various ways how to display these animations based on the use case specifics of the nft. The original animation is 10 sec long but can be reduced to 2.5 sec and combined with other elements. Like in the example where all 4 and 2 animations are combined with 2.5 sec intervals. I didn't bother to make all possible variations yet, but wouldn't mind making them in future.

To compliment the whole collection I have made other animation example, that is not related to the 4 element theme, though they could represent the other elements from alchemist table of symbols. This type of animation has more variations possible with placing blending mode layer or color filters on top of the animation. The animation itself could be potentially randomly generated or customized by user from rotating few diferent .png file layers into a unique artwork. 

Overall I drew my inspiration from caleidoscopic fractal images, and made them appear as if various components are brewing on a microscopic level together in the process of creating something new like a philosopher's stone perhaps.

Cheers 
    
    
    `
},
{


 creator: 'XactoMundo', name: 'Alchemist Badge',
 link: 'https://public.3.basecamp.com/p/Pu5CRyn12LxPjcSWmyR6LjuM',
 file: 'https://public.3.basecamp.com/p/5BLaAcJV7xTHitb6dYCwfYLJ'
    ,letter: 'P',
    description: `
This Crucible Art contest has forced me to dust off old Adobe skills and put fire under me to transform my pen&ink drawings into NFT art for the first time. I'm thinking that's secretly the point of all this; figure out a way.
The following submission is the end result of a collaboration. Omega B was kind enough to offer valuable time in working on this piece in order to make it dynamic. I had 3 objectives for the final result.
1) Alchemy theme
2) Movement
3) Function
Starting from the center and moving out there is the $MIST/$ETH pair showing both sides of your LP token inside this particular crucible. The star around the center pair represents planetary alignment by using the corresponding Alchemist symbols for each planet and the sun.
The gold spheres represent the different DEX's that can be used. Adding these logos mainly for the aesthetic pleasure of the investor- People like familiar logos and gold spheres. Uni for where liquidity is staked Ample for the new trinity Geyser and Balancer is also involved in this trinity Geyser.
Behind the gold spheres is the Horoscope and birth diamond. Giving a birth date adds to the NFT unique qualities in doing so. This is part of what will make each one different from the next.
Outside of the Horoscope ring is the information ring. I propose that the same data from the Alchemist.farm be displayed here. This includes wallet address, apy, and "Alchemist Crucible" (title).
Moving out to the 4 corners there are the 4 elements. These 4 elements will light up sequentially as the Crucible reaches new milestones. 1 month, 6 months, 1 year, 3 years... This is up for discussion, but you get the idea. The maturity of the Crucible is what adds the most value. Unstaking LP to collect rewards resets the elements of maturity, obviously.
The overall idea is to offer a unique Alchemist NFT with visual movement and full function that has incentive to hold on to as a collectable rather than a random investment. Thanks again to Omega B for making it possible. And thanks to this lovely space for the incentive to learn and problem solve on this journey.

I can't seem to add the moving piece here, so here's a still shot. The elements have been changed to Alchemy element symbols in the moving piece. 
    
    
    
    `,
    images: [p1],
    videos: [p2]
    
},
{


 creator: 'Hypermilla', name: '3D Alchemy Circle Concept',
 link: 'https://public.3.basecamp.com/p/Mb5Ps3BfmTmJMr7opCuN8n7V'
    ,letter: 'Q',
    description: `
Hello everyone,

I am a digital designer and game developer, and have been a crypto and web3 enthusiast since 2017, and especially in love with ethereum. my twitter handle is hypermilla

I wanted to give this contest a try and propose a different idea for the Crucible NFT:

A 3D Alchemy Circle
I believe the alchemy circle fits the idea of the NFT pretty nicely, since it's visually interesting, can have lots of variety, and can be animated, appealing to people's imagination.

I wanted to create a different version of the Alchemy circle, in which the different layers that compose the circle would be 3D models, rotating and hovering on top of each other, animating vertically.  The effect can become a mix of technology and alchemy/mysticism, which I think suits exactly what this project is about.

Here is a quick moodboard to show what was on my mind

So I created a Proof of Concept and will start working on generating different shapes / compositions / colors based on the ID of the NFT, value locked, and maybe others.


This was created with three.js, and the interactive 3D result can be found here https://crucible.netlify.app/.   The shapes were, for now, created using SVG files, just to make iteration easier, but I could achieve a better result with actual 3D objects made in Blender, and I will try that later. 

The idea of this first proof of concept was to make it really simple and convey the idea of technology + mysticism through 3D rotating shapes.  I did not add any specific runes or symbols for now, as I feel they take away from the "timeless" aspect of the final thing, but would like to hear your feedback on that. 

I intend to vary the amount of different pieces, colors, and maybe some other added elements, based on the Crucible characteristics. I'm also considering something in the middle, maybe something like the Ethereum logo or a potion bottle if possible.

Let me know your thoughts!
    
    `,
    demoUrl: 'https://crucible.netlify.app/',
    images: [q1, q2,q3]
},
{


 creator: 'Tom Coumans', name: 'Do Not Fear Experimentation',
    link: 'https://drive.google.com/drive/folders/1mtbvvNYqS8BQn92SYN5dcgtmcYoQawwE?usp=sharing'
    ,letter: 'R',
    videos: [r1]
},


]