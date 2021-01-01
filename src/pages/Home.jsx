
import { Layout } from "../components/Layout"
import Mid from "../components/Mid"
import NewArticles from "../components/NewArticles"
import NewInMs from "../components/NewInMs"
import TrendingWorkouts from "../components/TrendingWorkouts"

const Home =()=>{

    return(
        <Layout>
   

        <Mid/>
        <NewInMs/>
        <TrendingWorkouts/>
        <NewArticles/>
        </Layout>
    )
}

export default Home