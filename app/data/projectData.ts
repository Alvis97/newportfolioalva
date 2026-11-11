export type Project = {
   id: string
   cardTitle: string
   cardImage: string
   cardTool: string
   slug: string
   category: "web3" | "web2"
   heading: string
   subtitle: string
   overview: string
   techStack: string[]
   linkWebsite: string
   linkGit: string
   features: string[]
   flow: string[]
   security: string[]
   roadmap: string[]
   video: string
   challenges: string[]
   limitations: string[]
   image: string[]
}

export const projects: Project[] = [
    {
        id: "01",
        cardTitle: "01_sol-swap",
        cardImage: "/SwapCardImg.png",
        cardTool:"React · TypeScript · Solana",
        techStack:["React", "Typescript", "Solana", "Next.js", "Helius", "Jupiter", "Tailwind"],
        slug: "sol-swap",
        category: "web3",
        heading: "Sol Swap",
        subtitle: "A dApp for swapping SOL and USDC on mainnet",
        image: ["/...", "/...", "/..."],
        overview: "Sol Swap is a token swap app for SOL and USDC on Solana mainnet, built with Next.js and TypeScript using Jupiter’s API. I focused on the full transaction flow and on securing the backend routes.",
        features: ["Connecting Solana Wallet/Phantom",
                    "Get current SOL-prices with or without connecting your Wallet",
                    "Manual slipade options, get quote with transactionFee, slipade and estimated amount",
                    "Error, Success and loading states",
                    "Swap on minnet, link to View the transaction on solscan"],
        flow: ["Quote: fetch the best price and route from Jupiter",
                "Build: ask Jupiter to turn the quote into a transaction (server-side, so the API key stays private)",
                "Verify: check the fee payer and every program before anything is signed",
                "Sign: the user approves in their wallet, the app never sees the private key",
                "Send: broadcast the signed transaction through an RPC node",
                "Confirm: wait for the network and check that it didn’t fail on-chain"],            
        security: ["Server-side validation (zod): Every request is checked on the server. Only SOL and USDC are allowed, slippage has a maximum, and the amount is capped at about $2. I check on the server because the checks in the browser can be skipped. Anyone who calls the API directly still gets rejected.",
                    "Rate limiting and origin check: I limit how many requests one IP can send, using Upstash. I also block requests that come from other websites. This protects my Jupiter API key and my quota from bots.",
                    "Transaction check before signing: Before the wallet is asked to sign, the server checks two things: that the user is the fee payer, and that every instruction uses a program I allow. I wrote tests for a wrong fee payer and an unknown program, and both are stopped. This protects the user even if the swap response has been changed on the way.",
                    "Secrets stay on the server: The Jupiter API key is never sent to the browser. The errors the user sees are generic, so nobody learns how my setup works."],
        video: "/SwapGif.gif",
        challenges: ["1. An input field that lost the 0: When I typed 0.5 the field kept breaking. As soon as I wrote 0. it went back to 0, because I saved the input as a number and 0. is not a number yet. I fixed it by keeping the input as text, and only changing it to a number when I ask for a quote. Later I moved this state up to the parent component so both cards could use it.",
                      "2. A 403 that only happened after deploy: After I deployed, every request gave 403. The reason was my own origin check: APP_ORIGIN had the wrong address, and I had also misspelled the variable name. Environment variables also only work after a new deploy, so my first fixes seemed to do nothing. Now I read the logs first, and I always redeploy after I change an env variable."],
        
        limitations: ["Not checked by anyone else.: All the security is made and tested by me. It should not be used with real money beyond the $2 demo limit.",
                        "The IP rate limit can be avoided: Someone can change IP with a VPN, and people who share an IP also share the limit. The $2 limit keeps the damage small.",
                        "The RPC URL is public: It is in the browser code, so I limited it to my domain in Helius.",
                        "Free Jupiter plan: It only allows 1 request per second, so many visitors at the same time can hit the limit."],
        roadmap: ["I left these out on purpose to keep the project small and safe:",
                    "Transaction history:** I would need to store wallet data, which brings privacy and security questions.",
                    "Price chart: nice to have, but it does not change what the project shows.",
                    "More tokens:** every new token needs an allowlist entry, a limit and tests."],
                        // linkWebsite: "https://my-wallet-dashboard-mu.vercel.app/",
        linkWebsite: "https://...",
        // linkGit: "https://github.com/Alvis97/MyWalletDashboard"
        linkGit: "https://..."

    },
      {
        id: "02",
        cardTitle: "02_wallet-dashboard",
        cardImage: "/WalletCardImg.png",
        cardTool: "React · TypeScript · Solana",
        techStack:["React", "Typescript", "Solana", "Next.js", "Helius", "Tailwind"],
        slug: "wallet-dashboard",
        category: "web3",
        heading: "Wallet Dashboard",
        subtitle: "A Solana dApp for viewing your wallet in real time",
        image: ["/landingpage.png", "/tokenPage.png", "/NftPage.png"],
        overview: "A full-stack Solana dashboard that connects directly to your wallet and pulls live on-chain data. Built to give you a clean, at-a-glance view of everything in your wallet — no noise, just the information you actually need.",
        features: ["View your SOL balance in real time", 
                    "Track your token holdings with live 24h price changes",
                    "Browse your full NFT collection",
                    "See your latest transactions with dates and amounts"],
        flow: [], 
        security: [],           
        video: "/DashboardWalletVideo.gif",
        challenges: ["The biggest challenge was working with multiple Solana APIs simultaneously — fetching transaction history, token metadata and live price data each required different endpoints and data structures. Learning to handle async API calls, normalize the responses and display them cleanly was the core technical problem this project solved."],
        limitations: [],
        roadmap: [],
        // linkWebsite: "https://my-wallet-dashboard-mu.vercel.app/",
        // linkGit: "https://github.com/Alvis97/MyWalletDashboard"
        linkWebsite: "https:....",
        linkGit: "https://..."
    },
]