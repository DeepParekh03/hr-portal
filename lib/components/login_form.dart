import 'package:flutter/material.dart';
import 'package:flutter_application_1/Constants/colorConstants.dart';
import 'package:flutter_application_1/Constants/textConstants.dart';
import 'package:flutter_application_1/main.dart';
import 'package:fluttertoast/fluttertoast.dart';

import 'package:rounded_background_text/rounded_background_text.dart';

class LoginForm extends StatelessWidget {
  const LoginForm({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    ColorConstants cc = ColorConstants();

    TextConstants tc = TextConstants(height: height, width: width);

    return Form(
      child: Column(
        children: [
          TextField(
            decoration: InputDecoration(
                focusColor: cc.darkBlue,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30.0),
                ),
                filled: true,
                hintStyle: TextStyle(color: Colors.grey[800]),
                hintText: "Login",
                prefixIcon: Padding(
                  padding: const EdgeInsets.all(10),
                  child: Icon(Icons.person),
                ),
                fillColor: cc.lightBlue),
          ),

          Padding(
            padding: const EdgeInsets.symmetric(vertical: 10),
            child: TextField(
              obscureText: true,
              decoration: InputDecoration(
                  focusColor: cc.darkBlue,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30.0),
                  ),
                  filled: true,
                  hintStyle: TextStyle(color: Colors.grey[800]),
                  hintText: "Password",
                  prefixIcon: Padding(
                    padding: const EdgeInsets.all(10),
                    child: Icon(Icons.person),
                  ),
                  fillColor: cc.lightBlue),
            ),
          ),
          const SizedBox(height: 10),

          ElevatedButton(
              style: ElevatedButton.styleFrom(
                primary: cc.darkBlue,
                onPrimary: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(32.0),
                ),
              ),
              onPressed: () {
                Fluttertoast.showToast(
                  msg: "Swipe Right to apply for Job!", // message
                  toastLength: Toast.LENGTH_SHORT, // length
                  gravity: ToastGravity.BOTTOM, // location
                  // duration
                );
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) {
                      return BottomBar();
                    },
                  ),
                );
              },
              child: Container(
                width: width,
                height: 50,
                child: Center(
                  child: Text(
                    'Login',
                    style: tc.conditionalBlack(),
                  ),
                ),
              )),

          const SizedBox(height: 10),
          // AlreadyHaveAnAccountCheck(
          //   press: () {
          //     Navigator.push(
          //       context,
          //       MaterialPageRoute(
          //         builder: (context) {
          //           return SignUpScreen();
          //         },
          //       ),
          //     );
          //   },
          // ),
        ],
      ),
    );
  }
}
