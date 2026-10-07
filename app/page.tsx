import Opening from "./components/Opening";
import Birthday from "./components/Birthday";
import Memories from "./components/Memories";
import VideoSection from "./components/VideoSection";
import LoveLetter from "./components/LoveLetter";
import OurStory from "./components/OurStory";
import FinalSurprise from "./components/FinalSurprise";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
    return (
        <main>
            <MusicPlayer />

            <Opening />
            <Birthday />
            <Memories />
            <VideoSection />
            <LoveLetter />
            <OurStory />
            <FinalSurprise />
        </main>
    );
}

