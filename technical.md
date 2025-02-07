### **AgentLink: Technical Documentation**  

#### **1. Introduction**  
AgentLink is a WhatsApp-based blockchain messaging agent that enables users to interact with Web3 services seamlessly using text commands. Built on **Mode Chain**, it allows users to perform **on-chain transactions, token swaps, governance voting, and NFT trading** within WhatsApp. The system integrates AI for **intelligent data retrieval, automated blockchain queries, and smart contract interactions**.  


### **2. System Architecture**  
#### **2.1 Overview**  
AgentLink operates as a **middleware** between WhatsApp users and blockchain networks. It consists of:  
- **WhatsApp Bot Interface** – Receives and processes user messages.  
- **AI Processing Layer** – Uses OpenAI for natural language processing and intelligent command execution.  
- **Blockchain Interaction Layer** – Connects to Mode Chain, Ethereum-compatible networks, and APIs to execute transactions.  
- **Cookies API Integration** – Enables AI-based retrieval of agent data and blockchain information.  


### **3. Supported Networks**  
AgentLink currently operates on:  
- **Mode Mainnet**  
- **Mode Testnet**  
- **Avalanche Fuji Testnet**  
- **Arbitrum Sepolia Testnet**  
- **Sei Testnet**  


### **4. Key Functionalities**  

#### **4.1 ERC-20 Token Transactions**  
- Supports sending and receiving **USDC, MODE, and other ERC-20 tokens** via WhatsApp.  
- Uses **Viem Wallet Plugin** for secure transaction handling.  
- Transactions are signed using **user-approved wallet keys**.  

#### **4.2 AI-Powered Blockchain Queries (Kim)**  
- Users can execute **smart contract calls, fetch transaction history, and get account balances** via AI.  
- AI parses user commands into structured blockchain queries.  

#### **4.3 ModeSpray: Airdrops & Token Distributions**  
- Enables participation in **Mode ecosystem airdrops**.  
- Users can claim or distribute tokens using **simple commands** in WhatsApp.  

#### **4.4 CoinGecko Integration**  
- Retrieves **real-time cryptocurrency prices, market trends, and currency conversions**.  
- Uses **Coingecko API** for up-to-date data.  

#### **4.5 OpenSea NFT Access**  
- Fetches **NFT listings, ownership details, and market prices** from OpenSea.  
- Users can trade or view NFTs directly in WhatsApp.  

#### **4.6 Mode Governance Participation**  
- Users can **vote on governance proposals and receive ecosystem updates**.  
- Uses **Mode Network smart contract interactions** for proposal submissions and voting.  

#### **4.7 AI-Powered Cookies API for Data Retrieval**  
- Retrieves blockchain agent data based on **Twitter usernames or contract addresses**.  
- Automates **on-chain queries** for efficient data access.  
- Smart **pagination system** optimizes large dataset retrieval.  


### **5. Technical Stack**  

| Component           | Technology Used |
|---------------------|----------------|
| **Messaging Interface** | WhatsApp API (Meta) |
| **AI Processing** | OpenAI API, NLP Processing |
| **Blockchain Integration** | Viem Wallet, Mode Chain, Ethereum RPCs |
| **Smart Contracts** | Solidity, ERC-20, ERC-721 |
| **Data Retrieval** | Cookies API, Coingecko API, OpenSea API |
| **Hosting & Backend** | Node.js, Express.js, PostgreSQL |
| **Security** | End-to-End Encryption, OAuth for API Access |


### **6. Smart Contract Interactions**  
#### **6.1 Transaction Execution**  
- Users send a transaction request via WhatsApp.  
- AI processes the command and formats it into an **Ethereum-compatible transaction**.  
- The Viem wallet **signs and broadcasts** the transaction.  
- The user receives a **confirmation message** once the transaction is completed.  

#### **6.2 Token Swaps**  
- AI identifies **source and target tokens** in the user's command.  
- Executes swaps via **Uniswap smart contracts**.  
- Retrieves swap rates using **on-chain liquidity pools**.  

#### **6.3 Governance Voting**  
- AI fetches **active governance proposals**.  
- Users cast votes via WhatsApp commands.  
- Votes are signed and submitted to **Mode Chain’s governance contract**.  


### **7. API Endpoints (Backend Services)**  
AgentLink’s backend interacts with multiple APIs to fetch and execute blockchain data.  

#### **7.1 Cookies API Integration**  
- **Fetch agent data** based on Twitter username or contract address.  
- AI optimizes search results using **predictive data retrieval**.  

#### **7.2 Coingecko API**  
- Retrieves real-time **cryptocurrency market data**.  

#### **7.3 OpenSea API**  
- Fetches NFT details, ownership history, and prices.  


### **8. Security & Compliance**  
- **Encryption** – WhatsApp messages are **end-to-end encrypted**.  
- **Wallet Security** – Uses **secure key management** for transactions.  
- **API Authentication** – OAuth and API key authentication for external API access.  
- **Transaction Validations** – AI validates transaction details before execution.  


### **9. Future Enhancements**  
- **Layer 2 Network Support** – Expanding to **Polygon, Arbitrum, and Optimism**.  
- **Cross-Chain Transactions** – Enabling **bridging assets** across multiple blockchains.  
- **More AI Features** – Implementing **predictive analytics** for user portfolio management.  


### **10. Conclusion**  
AgentLink is **bridging Web3 and AI** through WhatsApp, making blockchain interactions simpler and more intuitive. By integrating AI-powered queries, seamless blockchain transactions, and a secure messaging interface, AgentLink is **pioneering the next generation of decentralized finance accessibility**. 🚀
