/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface LotteryRewardPoolInterface extends ethers.utils.Interface {
  functions: {
    "adminAddress()": FunctionFragment;
    "cake()": FunctionFragment;
    "chef()": FunctionFragment;
    "emergencyWithdraw(address,uint256)": FunctionFragment;
    "harvest(uint256)": FunctionFragment;
    "lptoken()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingReward(uint256)": FunctionFragment;
    "receiver()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setReceiver(address)": FunctionFragment;
    "startFarming(uint256,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "adminAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cake", values?: undefined): string;
  encodeFunctionData(functionFragment: "chef", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "harvest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lptoken", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "receiver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "setReceiver", values: [string]): string;
  encodeFunctionData(
    functionFragment: "startFarming",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "adminAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chef", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lptoken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "receiver", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startFarming",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "EmergencyWithdraw(address,uint256)": EventFragment;
    "Harvest(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "StartFarming(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Harvest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartFarming"): EventFragment;
}

export class LotteryRewardPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LotteryRewardPoolInterface;

  functions: {
    adminAddress(overrides?: CallOverrides): Promise<[string]>;

    "adminAddress()"(overrides?: CallOverrides): Promise<[string]>;

    cake(overrides?: CallOverrides): Promise<[string]>;

    "cake()"(overrides?: CallOverrides): Promise<[string]>;

    chef(overrides?: CallOverrides): Promise<[string]>;

    "chef()"(overrides?: CallOverrides): Promise<[string]>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lptoken(overrides?: CallOverrides): Promise<[string]>;

    "lptoken()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingReward(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingReward(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    receiver(overrides?: CallOverrides): Promise<[string]>;

    "receiver()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setAdmin(
      _admin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setReceiver(address)"(
      _receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    startFarming(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "startFarming(uint256,address,uint256)"(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  adminAddress(overrides?: CallOverrides): Promise<string>;

  "adminAddress()"(overrides?: CallOverrides): Promise<string>;

  cake(overrides?: CallOverrides): Promise<string>;

  "cake()"(overrides?: CallOverrides): Promise<string>;

  chef(overrides?: CallOverrides): Promise<string>;

  "chef()"(overrides?: CallOverrides): Promise<string>;

  emergencyWithdraw(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "emergencyWithdraw(address,uint256)"(
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  harvest(
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "harvest(uint256)"(
    _pid: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lptoken(overrides?: CallOverrides): Promise<string>;

  "lptoken()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingReward(
    _pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingReward(uint256)"(
    _pid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  receiver(overrides?: CallOverrides): Promise<string>;

  "receiver()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setAdmin(_admin: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setAdmin(address)"(
    _admin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setReceiver(
    _receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setReceiver(address)"(
    _receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  startFarming(
    _pid: BigNumberish,
    _lptoken: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "startFarming(uint256,address,uint256)"(
    _pid: BigNumberish,
    _lptoken: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    adminAddress(overrides?: CallOverrides): Promise<string>;

    "adminAddress()"(overrides?: CallOverrides): Promise<string>;

    cake(overrides?: CallOverrides): Promise<string>;

    "cake()"(overrides?: CallOverrides): Promise<string>;

    chef(overrides?: CallOverrides): Promise<string>;

    "chef()"(overrides?: CallOverrides): Promise<string>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    harvest(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lptoken(overrides?: CallOverrides): Promise<string>;

    "lptoken()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingReward(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingReward(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<string>;

    "receiver()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setAdmin(_admin: string, overrides?: CallOverrides): Promise<void>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiver(_receiver: string, overrides?: CallOverrides): Promise<void>;

    "setReceiver(address)"(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;

    startFarming(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "startFarming(uint256,address,uint256)"(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    EmergencyWithdraw(user: string | null, amount: null): EventFilter;

    Harvest(user: string | null, pid: BigNumberish | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    StartFarming(user: string | null, pid: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    adminAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "adminAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    cake(overrides?: CallOverrides): Promise<BigNumber>;

    "cake()"(overrides?: CallOverrides): Promise<BigNumber>;

    chef(overrides?: CallOverrides): Promise<BigNumber>;

    "chef()"(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    harvest(_pid: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lptoken(overrides?: CallOverrides): Promise<BigNumber>;

    "lptoken()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingReward(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingReward(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiver(overrides?: CallOverrides): Promise<BigNumber>;

    "receiver()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setAdmin(_admin: string, overrides?: Overrides): Promise<BigNumber>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setReceiver(_receiver: string, overrides?: Overrides): Promise<BigNumber>;

    "setReceiver(address)"(
      _receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    startFarming(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "startFarming(uint256,address,uint256)"(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adminAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "adminAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cake()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    chef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "chef()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencyWithdraw(address,uint256)"(
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    harvest(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "harvest(uint256)"(
      _pid: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lptoken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lptoken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingReward(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingReward(uint256)"(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "receiver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setAdmin(
      _admin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAdmin(address)"(
      _admin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setReceiver(
      _receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setReceiver(address)"(
      _receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    startFarming(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "startFarming(uint256,address,uint256)"(
      _pid: BigNumberish,
      _lptoken: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
