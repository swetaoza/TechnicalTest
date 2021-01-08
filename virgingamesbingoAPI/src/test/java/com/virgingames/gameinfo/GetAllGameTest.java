package com.virgingames.gameinfo;

import com.virgingames.constants.EndPoints;
import com.virgingames.testbase.TestBase;
import net.serenitybdd.junit.runners.SerenityRunner;
import net.serenitybdd.rest.SerenityRest;
import org.junit.Test;
import org.junit.runner.RunWith;


@RunWith(SerenityRunner.class)
public class GetAllGameTest extends TestBase {


    //-----***----This class will perform get operation for all games-----***--//

@Test
    public void gETALlGAmes(){
    SerenityRest.rest()
            .given()
            .when()
            .get(EndPoints.GET_ALL_Bingo_Games)
            .then()
            .statusCode(200);


}

//---THis Test Will Perform get Operation for all games where parameter is defaultGameFrequency=300000--//
@Test
    public void gEtGamEsbYTimESteMp(){
    SerenityRest.rest()
            .given()
            .queryParam("defaultGameFrequency","300000")
            .when()
            .get(EndPoints.GET_ALL_Bingo_Games)
            .then()
            .statusCode(200);


}



}
