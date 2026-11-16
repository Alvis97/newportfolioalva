type items = { title: string; text: string }

export type Project = {
   id: string
   slug: string
   category: "web3" | "web2"
   //card
   cardTitle: string
   cardImage: string
   cardTool: string
   //page
   heading: string
   subtitle: string
   overview: string
   techStack: string[]
   linkWebsite: string
   linkGit: string
   video: string
   image: string[]
   squareImg: string[]
   features: string[]
   flow: items[]
   security: items[]
   limitations: string[]
   roadmapIntro: string
   roadmap: items[]
   learned: string[]
}

export const projects: Project[] = [
    {
        id: "01",
        slug: "sol-swap",
        category: "web3",
        //Card
        cardTitle: "01_sol-swap",
        cardImage: "/SwapCardImg.png",
        cardTool:"React · TypeScript · Solana",
        //Page
        heading: "Sol Swap",
        subtitle: "A dApp for swapping SOL and USDC on mainnet",
        overview: "Sol Swap is a token swap app for SOL and USDC on Solana mainnet, built with Next.js and TypeScript using Jupiter’s API. I focused on the full transaction flow and on securing the backend routes.",
        techStack:["React", "Typescript", "Solana", "Next.js", "Helius", "Jupiter", "Tailwind"],
        // linkWebsite: "https://my-wallet-dashboard-mu.vercel.app/",
        linkWebsite: "",
        // linkGit: "https://github.com/Alvis97/MyWalletDashboard"
        linkGit: "",
        video: "/SwapGif.gif",
        image: [],
        squareImg: ["/SquareError.png", "/SquareLoading.png", "/SquareFailedSwap.png", "/SquareQuote.png", "/SquareSOL.png", "/SquareSuccessSwap.png", "/SquareWalletBtn.png", "/SquareSlippage.png"],
        features: ["Connecting Solana Wallet/Phantom",
                    "Get current SOL-prices with or without connecting your Wallet",
                    "Manual slipade options, get quote with transactionFee, slipade and estimated amount",
                    "Error, Success and loading states",
                    "Swap on minnet, link to View the transaction on solscan"],
        flow: [{
            title: "Quote:",
            text: "Fetch the best price and route from Jupiter",
        }, {
            title: "Build:",
            text: "Ask Jupiter to turn the quote into a transaction (server-side, so the API key stays private)",
        }, {
            title: "Verify:",
            text: "Check the fee payer and every program before anything is signed",
        }, {
            title: "Sign:",
            text: "the user approves in their wallet, the app never sees the private key",
        }, {
            title: "Send:",
            text: "Broadcast the signed transaction through an RPC node"
        }, {
            title: "Confirm:",
            text: "Wait for the network and check that it didn’t fail on-chain"
        }],            
        security: [
            {
                title: "Server-side validation (zod)",
                text: "Every request is checked on the server. Only SOL and USDC are allowed, slippage has a maximum, and the amount is capped at about $2. I check on the server because the checks in the browser can be skipped. Anyone who calls the API directly still gets rejected."
            }, {
                title: "Rate limiting and origin check:",
                text: "I limit how many requests one IP can send, using Upstash. I also block requests that come from other websites. This protects my Jupiter API key and my quota from bots.",
            }, {
                title: "Transaction check before signing:",
                text: "Before the wallet is asked to sign, the server checks two things: that the user is the fee payer, and that every instruction uses a program I allow. I wrote tests for a wrong fee payer and an unknown program, and both are stopped. This protects the user even if the swap response has been changed on the way."
            }, {
                title: "Secrets stay on the server:",
                text: "The Jupiter API key is never sent to the browser. The errors the user sees are generic, so nobody learns how my setup works."
            }],
        limitations: ["Not checked by anyone else.: All the security is made and tested by me. It should not be used with real money beyond the $2 demo limit.",
                        "The IP rate limit can be avoided: Someone can change IP with a VPN, and people who share an IP also share the limit. The $2 limit keeps the damage small.",
                        "The RPC URL is public: It is in the browser code, so I limited it to my domain in Helius.",
                        "Free Jupiter plan: It only allows 1 request per second, so many visitors at the same time can hit the limit."],
        roadmapIntro: "I left these out on purpose to keep the project small and safe:",
        roadmap: [{
                title: "Transaction history", text: "I would need to store wallet data, which brings privacy and security questions.",
        }, {
             title: "Price chart: ", text: "Nice to have, but it does not change what the project shows.",
        }, {
            title: "More tokens:", text: "Every new token needs an allowlist entry, a limit and tests.",
        }],           
        learned: ["This was my first time building a swap, so even the transaction flow (quote, build, sign, confirm) was new to me. I built this project together with AI. I typed the code myself and tried to understand each part, and I asked questions when I did not. I also fixed many typos and bugs on my own by reading error messages and logs.", 
                  "The biggest lesson was about security. On a blockchain there is no undo, so every check has to happen before the user signs. I also learned to never trust input, and to use several layers of protection instead of only one."
        ],
    },
        {
        id: "02",
        slug: "wallet-dashboard",
        category: "web3",
        //Card
        cardTitle: "02_wallet-dashboard",
        cardImage: "/WalletCardImg.png",
        cardTool:"React · TypeScript · Solana",
        //Page
        heading: "Wallet Dashboard",
        subtitle: "A Solana dApp for viewing your wallet in real time",
        overview: "A full-stack Solana dashboard that connects directly to your wallet and pulls live on-chain data. Built to give you a clean, at-a-glance view of everything in your wallet — no noise, just the information you actually need.",
        techStack:["React", "Typescript", "Solana", "Next.js", "Helius", "Jupiter", "Tailwind"],
        // linkWebsite: "https://my-wallet-dashboard-mu.vercel.app/",
        linkWebsite: "",
        // linkGit: "https://github.com/Alvis97/MyWalletDashboard"
        linkGit: "",
        video: "/DashboardWalletVideo.gif",
        image: ["/landingpage.png", "/tokenPage.png", "/NftPage.png"],
        squareImg: [],
        features: ["View your SOL balance in real time", 
                    "Track your token holdings with live 24h price changes",
                    "Browse your full NFT collection",
                    "See your latest transactions with dates and amounts"],
        flow: [{
            title: "Quote:",
            text: "Fetch the best price and route from Jupiter",
        }, {
            title: "Build:",
            text: "Ask Jupiter to turn the quote into a transaction (server-side, so the API key stays private)",
        }, {
            title: "Verify:",
            text: "Check the fee payer and every program before anything is signed",
        }, {
            title: "Sign:",
            text: "the user approves in their wallet, the app never sees the private key",
        }, {
            title: "Send:",
            text: "Broadcast the signed transaction through an RPC node"
        }, {
            title: "Confirm:",
            text: "Wait for the network and check that it didn’t fail on-chain"
        }],            
        security: [
            {
                title: "Server-side validation (zod):",
                text: "Every request is checked on the server. Only SOL and USDC are allowed, slippage has a maximum, and the amount is capped at about $2. I check on the server because the checks in the browser can be skipped. Anyone who calls the API directly still gets rejected."
            }, {
                title: "Rate limiting and origin check:",
                text: "I limit how many requests one IP can send, using Upstash. I also block requests that come from other websites. This protects my Jupiter API key and my quota from bots.",
            }, {
                title: "Transaction check before signing:",
                text: "Before the wallet is asked to sign, the server checks two things: that the user is the fee payer, and that every instruction uses a program I allow. I wrote tests for a wrong fee payer and an unknown program, and both are stopped. This protects the user even if the swap response has been changed on the way."
            }, {
                title: "Secrets stay on the server:",
                text: "The Jupiter API key is never sent to the browser. The errors the user sees are generic, so nobody learns how my setup works."
            }],
        limitations: ["Not checked by anyone else.: All the security is made and tested by me. It should not be used with real money beyond the $2 demo limit.",
                        "The IP rate limit can be avoided: Someone can change IP with a VPN, and people who share an IP also share the limit. The $2 limit keeps the damage small.",
                        "The RPC URL is public: It is in the browser code, so I limited it to my domain in Helius.",
                        "Free Jupiter plan: It only allows 1 request per second, so many visitors at the same time can hit the limit."],
        roadmapIntro: "I left these out on purpose to keep the project small and safe:",
        roadmap: [{
                title: "Transaction history", text: "I would need to store wallet data, which brings privacy and security questions.",
        }, {
             title: "Price chart: ", text: "Nice to have, but it does not change what the project shows.",
        }, {
            title: "More tokens:", text: "Every new token needs an allowlist entry, a limit and tests.",
        }],           
        learned: ["This was my first time building a swap, so even the transaction flow (quote, build, sign, confirm) was new to me. I built this project together with AI. I typed the code myself and tried to understand each part, and I asked questions when I did not. I also fixed many typos and bugs on my own by reading error messages and logs.", 
                  "The biggest lesson was about security. On a blockchain there is no undo, so every check has to happen before the user signs. I also learned to never trust input, and to use several layers of protection instead of only one."
        ]
    }]
    
     
        

      
   
  