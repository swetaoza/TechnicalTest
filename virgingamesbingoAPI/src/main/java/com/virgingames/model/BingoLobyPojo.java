package com.virgingames.model;

import java.util.HashMap;

public class BingoLobyPojo {

 //--------------These are data of payload field------
   private int gameRef;
    private int streamId;
    private String streamName;
    private Boolean streamClosure;
    private long startTime;
    private String superJackpot;
    private HashMap<Double,Object> progressiveJackpot;
    private HashMap<Double,Object> fullHouse;
    private HashMap<Double,Object> lineAndFullHouseTotal;
    private HashMap<Double,Object> costPerCard;
    private String mustDropJackpot;
    private int noPlayers;
    private String linkBrandId;//null
    private long defaultGameFrequency;
    private boolean jackpotLoading;
    private int gameType;
    private boolean displayLink;
    private int minCards;
    private int maxCards;
    private boolean session;
    private boolean allWinner;
    private String bingoMustDropLobbyInfoResource;
    private boolean linkGame;

}
