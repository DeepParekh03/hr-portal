import 'package:flutter/material.dart';
import 'package:flutter_application_1/Constants/colorConstants.dart';
import 'package:flutter_application_1/Constants/textConstants.dart';

import 'package:flutter_application_1/Login.dart';

class LoginAndSignupBtn extends StatelessWidget {
  const LoginAndSignupBtn({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    ColorConstants cc = ColorConstants();
    TextConstants tc = TextConstants(height: height, width: width);
    return Column(
      children: [
        Hero(
          tag: "login_btn",
          child: ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return LoginScreen();
                  },
                ),
              );
            },
            child: Text(
              "Login".toUpperCase(),
            ),
          ),
        ),
        const SizedBox(height: 16),
        // ElevatedButton(
        //   onPressed: () {
        //     Navigator.push(
        //       context,
        //       MaterialPageRoute(
        //         builder: (context) {
        //           return SignUpScreen();
        //         },
        //       ),
        //     );
        //   },
        //   style: ElevatedButton.styleFrom(
        //       primary: kPrimaryLightColor, elevation: 0),
        //   child: Text(
        //     "Sign Up".toUpperCase(),
        //     style: TextStyle(color: Colors.black),
        //   ),
        // ),
      ],
    );
  }
}
