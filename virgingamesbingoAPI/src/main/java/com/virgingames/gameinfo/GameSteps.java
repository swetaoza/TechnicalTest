package com.virgingames.gameinfo;

import com.virgingames.constants.EndPoints;
import io.restassured.response.ValidatableResponse;
import net.serenitybdd.rest.SerenityRest;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;

public class GameSteps {

    @Step("Get all Student steps")
    public ValidatableResponse geTallGames(){
        return SerenityRest.rest()
                .given()
                .when()
                .get(EndPoints.GET_ALL_Bingo_Games)
                .then()
                .statusCode(200);
    }
}
