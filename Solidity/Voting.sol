//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Test {

    struct Candidate {
        string name;
        address candidateAddress;
        uint votes;
        bool claimed;
    }

    address[] public candidates;
    mapping(address => Candidate) public candidatesInfo;

    address[] public voters;
    mapping(address => address) public votedFor;

    address[] public winners;

    uint totalAmount;
    uint totalPrize;

    uint constant DURATION = 60; // 60 seconds
    uint public endsAt;
    bool started;
    bool revealed;

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    //если условие модификатора выполняется при вызове этой функции, функция выполняется, 
    //в противном случае генерируется исключение.
    modifier onlyOwner() {
        require(owner == msg.sender, "not an owner!");
        _;
    }

    function start() external onlyOwner {
        started = true;
        endsAt = block.timestamp + DURATION;
    }


    event CandidateAdded(address indexed candidateAddress);

    function addCandidate(string memory _name) external {
        require(!started, "already started!");
        require(msg.sender != owner, "you are not owner!");

        for(uint i = 0; i < candidates.length; i++) {
            if(candidates[i] == msg.sender) {
                revert("You've already added yourself!");
            }
        }
        
        candidates.push(msg.sender);
        candidatesInfo[msg.sender] = Candidate({
            name: _name,
            candidateAddress: msg.sender,
            votes: 0,
            claimed: false
        });


        //Emit keyword is used to emit an event in solidity, which can be read by the client in Dapp.
        //Event in solidity is to used to log the transactions happening in the blockchain.
        emit CandidateAdded(msg.sender);
    }
    
    function listCandidates() external view returns(Candidate[] memory) {
        Candidate[] memory allCandidates = new Candidate[](candidates.length);

        for(uint i = 0; i < candidates.length; i++) {
            allCandidates[i] = candidatesInfo[candidates[i]];
        }

        return allCandidates;
    }


    function vote(address _candidateAddress) external payable {
        require(started, "voting stage has not started yet!");
        require(msg.value == 1000, "incorrect sum!");

        for(uint i = 0; i < voters.length; i++) {
            if(voters[i] == msg.sender) {
                revert("You've already voted!");
            }
        }

        //check _candidateAddress

        for(uint i = 0; i < candidates.length; i++) {
            if(candidates[i] == _candidateAddress) {

                Candidate storage candidate = candidatesInfo[_candidateAddress];

                voters.push(msg.sender);
                votedFor[msg.sender] = _candidateAddress;
                candidate.votes++;
                totalAmount += msg.value;
                //todo exit
                        
            }
        }

        //todo error
    }

    function revealWinners() external onlyOwner {
        //started?
        require(!revealed, "already revealed");
        require(block.timestamp >= endsAt, "too early!");

        uint candidatesCount = candidates.length;
        uint localVotesMaximum;
        address[] memory localWinners = new address[](candidatesCount);
        uint currentWinnersNum;

        for(uint i = 0; i < candidatesCount; i++) {
            address currentCandidate = candidates[i];
            uint currentVotes = candidatesInfo[currentCandidate].votes;

            if(currentVotes == 0 || currentVotes < localVotesMaximum) {
                continue;
            } else if(currentVotes == localVotesMaximum) {
                localWinners[currentWinnersNum] = currentCandidate;
                currentWinnersNum++;
            } else {
                currentWinnersNum = 0;
                localVotesMaximum = currentVotes;
                localWinners[currentWinnersNum] = currentCandidate;
                currentWinnersNum++;
            }
        }

        for(uint i = 0; i < currentWinnersNum; i++) {
            winners.push(localWinners[i]);
        }

        totalPrize = totalAmount - ((totalAmount * 5) / 100);

        revealed = true;
    }

    function getPrize() external {
        require(revealed && winners.length > 0, "cannot claim!");

        Candidate storage currentCandidate = candidatesInfo[msg.sender];
        // TODO: проверить, что такой кандидат был и что он в числе победителей
        require(!currentCandidate.claimed, "already claimed!");
        currentCandidate.claimed = true;

        uint amount = totalPrize / winners.length;

        payable(msg.sender).transfer(amount);
    }

    function getComission() external onlyOwner {
        // TODO: сделать так, чтобы владелец не мог забирать прибыль дважды или до окончания голосования
        uint amount = totalAmount - totalPrize;
        
        payable(owner).transfer(amount);
    }
}