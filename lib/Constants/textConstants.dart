import 'package:flutter_application_1/constants/colorConstants.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_application_1/services/CheckTablet.dart';

class TextConstants {
  ColorConstants cc = new ColorConstants();
  late double height;
  late double width;
  TextConstants({required this.height, required this.width});

  TextStyle vT() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.025 * height * 1.25
            : 0.025 * height,
        fontWeight: FontWeight.w400,
        color: cc.railways);
  } //vt

  TextStyle vtFSFW() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.019 * height * 1.25
            : 0.019 * height,
        fontWeight: FontWeight.w300);
  } //vt

  TextStyle lightBlue() =>
      TextStyle(color: cc.lightBlue); //TAR,Leaderboard,AppStatus,AppRequest
  TextStyle leaderboard() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        color: cc.lightBlue,
        fontSize: ct.checktabBool(height, width)
            ? 1.2 * 0.03 * height
            : 0.03 * height);
  }

  TextStyle FWFS() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontWeight: FontWeight.w500,
        fontSize: ct.checktabBool(height, width)
            ? 0.025 * 0.8 * height
            : 0.025 * height);
  } //EventDetails

  TextStyle white20() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.020 * height * 1.25
            : 0.030 * height,
        color: cc.white);
  } //TAR,signin,Leaderboard,AppStatus,AppRequest

  TextStyle white21() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.025 * height * 1.25
            : 0.030 * height,
        fontWeight: FontWeight.w300,
        color: cc.white);
  } //signin

  TextStyle student() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        color: cc.white,
        fontWeight: FontWeight.w500,
        fontSize: ct.checktabBool(height, width)
            ? 1.25 * 0.026 * height
            : 0.026 * height,
        letterSpacing: 1);
  } //Student,More,Home

  TextStyle white18() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.023 * height * 1.25
            : 0.023 * height,
        color: cc.white);
  } //RO,Notice,EventList

  TextStyle white22() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.028 * height * 1.25
            : 0.028 * height,
        color: cc.white);
  } //Form,EventDetail

  TextStyle white17() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: 16, fontWeight: FontWeight.bold, color: cc.white);
  }

  TextStyle whiteFW() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
      fontSize: ct.checktabBool(height, width)
          ? 0.026 * height * 1.25
          : 0.026 * height,
      color: cc.white,
      fontWeight: FontWeight.w500,
    );
  } //quiz,poll

  TextStyle whiteFWpoopins() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
      fontSize: ct.checktabBool(height, width)
          ? 0.021 * height * 1.25
          : 0.021 * height,
      color: cc.white,
      fontWeight: FontWeight.w500,
    );
  } //quiz

  TextStyle light() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: 10, fontWeight: FontWeight.w600, color: cc.quiz);
  } //Qu

  TextStyle conditionalBlack() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: 17, fontWeight: FontWeight.bold, color: cc.black);
  } //Quiz,poll

  TextStyle conditionalWhite() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.023 * height * 1.25
            : 0.023 * height,
        color: cc.white);
  } //Quiz,poll

  TextStyle profile16() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: 10, color: cc.white, fontWeight: FontWeight.w500);
  } //profile

  TextStyle profile17() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.022 * height * 1.25
            : 0.022 * height,
        color: cc.white,
        fontWeight: FontWeight.w500);
  } //Profile

  TextStyle more() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.026 * height * 1.25
            : 0.026 * height,
        color: cc.black);
  } //more

  TextStyle home() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: 14, fontWeight: FontWeight.w600, color: cc.dark_purple);
  } //Events

  TextStyle events() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: 14, fontWeight: FontWeight.w600, color: cc.quiz);
  } //Events

  TextStyle Quiz_head() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: 16, fontWeight: FontWeight.w600, color: cc.quiz);
  } //Quiz

  TextStyle eventDetail() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: 19, fontWeight: FontWeight.w600, color: cc.blueblack);
  } //EventDetail

  TextStyle whiteWidth20() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.026 * width * 1.25
            : 0.052 * width,
        color: cc.white);
  } //AppStatus

  TextStyle RO() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
      fontSize: ct.checktabBool(height, width)
          ? 0.03184 * 1.25 * height
          : 0.03184 * height,
      fontWeight: FontWeight.w500,
      color: cc.lightBlue,
      decoration: TextDecoration.underline,
    );
  }

  TextStyle details() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 1.35 * 0.02165 * height
            : 0.02165 * height,
        fontWeight: FontWeight.w400,
        color: cc.white);
  } //events

  TextStyle eventsLink() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        fontSize: ct.checktabBool(height, width)
            ? 0.026 * height * 1.1
            : 0.026 * height,
        fontWeight: FontWeight.w600,
        color: cc.buttonAR);
  }

  TextStyle Railway() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: ct.checktabBoolRailway(height, width)
            ? 0.026 * height * 1.1
            : 0.038 * height,
        fontWeight: FontWeight.w600,
        color: cc.white);
  }

  TextStyle Railway_app() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: ct.checktabBoolRailway(height, width)
            ? 0.021 * height * 1.1
            : 0.031 * height,
        fontWeight: FontWeight.w600,
        color: cc.white);
  }

  TextStyle app_req() {
    CheckTablet ct = new CheckTablet();
    return GoogleFonts.poppins(
        fontSize: ct.checktabBoolRailway(height, width)
            ? 0.021 * height * 1.2
            : 0.033 * height,
        fontWeight: FontWeight.w600,
        color: cc.white);
  } //application_req

  TextStyle eventDetailsPage() {
    CheckTablet ct = new CheckTablet();
    return TextStyle(
        color: cc.white,
        fontSize: ct.checktabBool(height, width)
            ? 0.039 * 0.8 * height
            : 0.039 * height,
        fontWeight: FontWeight.w700,
        letterSpacing: 1);
  }
}
