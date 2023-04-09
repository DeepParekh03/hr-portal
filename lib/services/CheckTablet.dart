class CheckTablet {
  bool checktabBool(double height, double width) {
    if (height >= 1000 || width >= 600) {
      return true;
    } else {
      return false;
    }
  }

  bool checktabBoolRailway(double height, double width) {
    if (height >= 670 && width >= 300) {
      return true;
    } else {
      return false;
    }
  }
}
