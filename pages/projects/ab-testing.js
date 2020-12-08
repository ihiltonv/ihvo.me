import Head from 'next/head'

export default function ABTesting() {
    return (
        <>
            <Head>
                <title>A/B Testing</title>
            </Head>
                <div className='mainContent'>
                    <h1>Cacti: A/B Testing</h1>
                    <h2>Two Site Designs:</h2>
                    <h4>Version A</h4>
                    <img src="/ab-testing/version_a.png" alt="A screenshot of the website version A"/>
                    <h4>Version B</h4>
                    <img src="/ab-testing/version_b.png" alt="A screenshot of the website version B"/>
                    <h4>Differences</h4>
                    <p>As you can see, version A of the webiste has a horizontal layout of the cacti, whereas version B has a vertical
                    layout. Because of this difference, I hypothesize that the vertical layout will cause people to take more time to
                    add items to their cart, as they will need to scroll to view all the items on most devices, rather than being able
                    to see all of them initially.</p>

                    <h4>Hypotheses</h4>
                    <p>For the time to completion, my alternative hypothesis is that people will take more time to complete their
                    actions
                    on site version B than on version A. My null hypothesis is that there is not a statistically-significant
                    difference
                    between the times it takes people to complete their actions on the two sites.</p>
                    <p>For the return rate, my alternative hypothesis is that there will be a significant difference in the return rates
                    between versions A and B. My null hypothesis is that there is no significant difference between the return rates.
                    </p>

                    <h4>Data Collection</h4>
                    <p>To collect the data, I waited for my classNamemates to use the site in order to generate the useage data, and then I
                    downloaded the sitelog from Heroku. After I downloaded the data, I filtered it and organized in in Excel in order
                    to
                    calculate the necessary values.</p>

                    <h4>Test Results</h4>
                    <h5>Time to Completion Test</h5>
                    <p>For the time to completion, I ran a t-test and found a significant difference between site A and site B, with my
                    test producing a
                    t-score of -3.3349 and a p-value of 0.0006, far less than the alpha of 0.05. This means that there was a
                    statistically significant difference between the two populations and we can therefore reject the null hypothesis.
                    Below you can see an infographic of the two populations, where you'll notice that the mean value for population A
                    is
                    lower than population B, meaning that users took less time to complete their tasks on version A. </p>
                    <img src="/ab-testing/box-plot.png" alt="a boxplot depicting the two distributions from the two site versions"/>
                    <h5>Return Rate Test</h5>
                    <p>For the return rate, I ran a chi-squared test which produced a chi-squared value of 0.1193 and a p-value of
                    0.7300,
                    which is far higher than our alpha of 0.05. Because of this we fail to reject the null hypothesis, which means we
                    have not found a significant difference between the two populations.</p>
                    <h4>Takeaways</h4>
                    <ul>
                    <li>Organizing items in a fashion that requires people to scroll more is correlated with people spending more time
                        on your site, which may promote more thoughtful browsing than organizing items horizontally</li>
                    <li>The limitation of this testing is that it was done over a short period of time, so we were not able to see who
                        might have returned to the site over the long term.</li>
                    <li>The number of users that accessed my site was not particularly large, so this could have impacted the results
                        I
                        received</li>
                    </ul>
                </div>
    <style jsx>{
        `/* Put your style information here! */
        
        a {
            color: blue
        }

        h1 {
            text-align: center;
        }
        
        .mainContent {
            margin-right: 20%;
            margin-left: 20%;
            box-shadow: 0 10px 30px rgba(0, 0,0, 0.1);
            border-radius: 10px;
            padding-left: 10px;
            padding-right: 10px;
            padding-bottom: 10px;
            background-color: white;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        
        .mainContent p, h5 {
            padding-left: 30px;
            padding-right: 30px;
        }
        
        .mainContent h4 {
            padding-left: 20px;
            padding-right: 30px;
        }
        
        .mainContent ul {
            padding-left: 50px;
            padding-right: 30px;
        }
        
        img {
            height: auto;
            width: 100%;
        }`
    }</style>
        </>
    )
}