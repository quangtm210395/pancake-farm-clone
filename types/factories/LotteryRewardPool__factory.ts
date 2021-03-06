/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LotteryRewardPool } from "../LotteryRewardPool";

export class LotteryRewardPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _chef: string,
    _cake: string,
    _admin: string,
    _receiver: string,
    overrides?: Overrides
  ): Promise<LotteryRewardPool> {
    return super.deploy(
      _chef,
      _cake,
      _admin,
      _receiver,
      overrides || {}
    ) as Promise<LotteryRewardPool>;
  }
  getDeployTransaction(
    _chef: string,
    _cake: string,
    _admin: string,
    _receiver: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _chef,
      _cake,
      _admin,
      _receiver,
      overrides || {}
    );
  }
  attach(address: string): LotteryRewardPool {
    return super.attach(address) as LotteryRewardPool;
  }
  connect(signer: Signer): LotteryRewardPool__factory {
    return super.connect(signer) as LotteryRewardPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LotteryRewardPool {
    return new Contract(address, _abi, signerOrProvider) as LotteryRewardPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MasterChef",
        name: "_chef",
        type: "address",
      },
      {
        internalType: "contract IBEP20",
        name: "_cake",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "StartFarming",
    type: "event",
  },
  {
    inputs: [],
    name: "adminAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cake",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chef",
    outputs: [
      {
        internalType: "contract MasterChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IBEP20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lptoken",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "setReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "contract IBEP20",
        name: "_lptoken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "startFarming",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611a63380380611a638339818101604052608081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050600061007261021d60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050610225565b600033905090565b61182f806102346000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063970d8e051161008c578063f2fde38b11610066578063f2fde38b14610333578063f363393b14610377578063f7260d3e146103ab578063fc6f9468146103df576100ea565b8063970d8e0514610279578063dce17484146102d1578063ddc6326214610305576100ea565b8063715018a6116100c8578063715018a6146101a9578063718da7ee146101b35780638da5cb5b146101f757806395ccea671461022b576100ea565b806312f7086c146100ef5780631fc8bc5d14610131578063704b6c0214610165575b600080fd5b61011b6004803603602081101561010557600080fd5b8101908080359060200190929190505050610413565b6040518082815260200191505060405180910390f35b6101396104e8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101a76004803603602081101561017b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061050e565b005b6101b161061a565b005b6101f5600480360360208110156101c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107a0565b005b6101ff6108a7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102776004803603604081101561024157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108d0565b005b6102cf6004803603606081101561028f57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a37565b005b6102d9610c25565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103316004803603602081101561031b57600080fd5b8101908080359060200190929190505050610c4b565b005b6103756004803603602081101561034957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f23565b005b61037f610ff7565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103b361101d565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e7611043565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631175a1dd83306040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156104a657600080fd5b505afa1580156104ba573d6000803e3d6000fd5b505050506040513d60208110156104d057600080fd5b81019080805190602001909291905050509050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610516611069565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146105d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610622611069565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f61646d696e3a207775743f00000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108d8611069565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610998576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6109e53382600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110719092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd9695826040518082815260200191505060405180910390a25050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f61646d696e3a207775743f00000000000000000000000000000000000000000081525060200191505060405180910390fd5b610b47600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828473ffffffffffffffffffffffffffffffffffffffff166111139092919063ffffffff16565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2bbb15884836040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b158015610bc457600080fd5b505af1158015610bd8573d6000803e3d6000fd5b50505050823373ffffffffffffffffffffffffffffffffffffffff167f4ae4c06870b47ebbde6d53278986a91eb269349cdc9ee1e9d211373dd98afef160405160405180910390a3505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f61646d696e3a207775743f00000000000000000000000000000000000000000081525060200191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e2bbb1588260006040518363ffffffff1660e01b81526004018083815260200182815260200192505050600060405180830381600087803b158015610d8c57600080fd5b505af1158015610da0573d6000803e3d6000fd5b505050506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610e2f57600080fd5b505afa158015610e43573d6000803e3d6000fd5b505050506040513d6020811015610e5957600080fd5b81019080805190602001909291905050509050610edb600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110719092919063ffffffff16565b813373ffffffffffffffffffffffffffffffffffffffff167fc9695243a805adb74c91f28311176c65b417e842d5699893cef56d18bfa48cba60405160405180910390a35050565b610f2b611069565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610feb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610ff4816112d8565b50565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b61110e8363a9059cbb60e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061141b565b505050565b60008114806111e1575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156111a457600080fd5b505afa1580156111b8573d6000803e3d6000fd5b505050506040513d60208110156111ce57600080fd5b8101908080519060200190929190505050145b611236576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806117c46036913960400191505060405180910390fd5b6112d38363095ea7b360e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061141b565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561135e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061179e6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606061147d826040518060400160405280602081526020017f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661150a9092919063ffffffff16565b90506000815111156115055780806020019051602081101561149e57600080fd5b8101908080519060200190929190505050611504576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611774602a913960400191505060405180910390fd5b5b505050565b60606115198484600085611522565b90509392505050565b606061152d85611728565b61159f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b602083106115ef57805182526020820191506020810190506020830392506115cc565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611651576040519150601f19603f3d011682016040523d82523d6000602084013e611656565b606091505b5091509150811561166b578092505050611720565b60008151111561167e5780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116e55780820151818401526020810190506116ca565b50505050905090810190601f1680156117125780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b949350505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561176a57506000801b8214155b9250505091905056fe5361666542455032303a204245503230206f7065726174696f6e20646964206e6f7420737563636565644f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735361666542455032303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a26469706673582212201c767f5a0a5c15b71eeca039471ce2e05b57ec1c8fa408d901fe615568920f0064736f6c634300060c0033";
