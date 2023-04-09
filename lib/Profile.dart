// import 'package:firebase_storage/firebase_storage.dart';
// import 'dart:html';
import 'package:flutter_application_1/constants/colorConstants.dart';
import 'package:flutter_application_1/constants/textConstants.dart';
import 'package:flutter/material.dart';
// import 'package:image_firebase/ServiceManager/AuthenticationService.dart';
// import 'package:image_firebase/DatabaseManager/DatabaseManager.dart';
// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:firebase_core/firebase_core.dart';
// import 'package:cloud_firestore/cloud_firestore.dart';
// import 'package:image_firebase/admin/colors.dart';
// import 'package:image_firebase/admin/uploadProfilePhoto.dart';
// import 'package:image_picker/image_picker.dart';

class Profile extends StatefulWidget {
  const Profile({Key? key}) : super(key: key);

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  String userID = "1234";
  String name = " Deep";
  String addharID = "123345677";
  String pan = "14242536647";
  String job_status = "YES";
  String url1 =
      "https://tse3.mm.bing.net/th?id=OIP.QUlv9ZlOVItprAL9GbzLcwHaE8&pid=Api&P=0";
  String general_info =
      "Handled the ingredients used for the coffee mixes.\nAssured that the coffee served to the customers are hot and high quality.\nExperimented on regular basis new concoctions and have some customers for free tasting";

  String department = "Product Design";
  String Education = "Stanford";
  String Organization = "Siinmmplee";

  String languages = "English, Hindi";
  String Work_History = "Stanford";
  String Birthday = "22/01/2023";

  String url =
      'https://tse1.mm.bing.net/th?id=OIP.51JUhK_39dVGFXUCAouzmwHaK7&pid=Api&rs=1&c=1&qlt=95&w=75&h=111';

  // @override
  // void initState() {
  //   super.initState();
  //   fetchUserInfo();
  // }

  // fetchUserInfo() async {
  //   User getUser = FirebaseAuth.instance.currentUser!;
  //   userID = getUser.uid;
  //   if (getUser != null)
  //     await FirebaseFirestore.instance
  //         .collection("profilePhoto")
  //         .doc(userID)
  //         .get()
  //         .then((value) {
  //       url = value.get('imageURL');
  //       print(url);
  //     });
  //   await FirebaseFirestore.instance
  //       .collection('adminprofileList')
  //       .doc(userID)
  //       .get()
  //       .then((ds) {
  //     name = ds.get('name');
  //     department = ds.get('department');
  //     gender = ds.get('gender');
  //     sap_id = ds.get('sap_id');
  //     print(name);
  //     print(sap_id);
  //     print(department);
  //     print(gender);
  //   }).catchError((e) {
  //     print(e.toString());
  //   });
  // }

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    ColorConstants cc = ColorConstants();
    TextConstants tc = TextConstants(height: height, width: width);
    return Scaffold(
      backgroundColor: cc.railways,
      appBar: AppBar(
          title: Text("Profile Screen"), backgroundColor: Colors.lightBlue),
      body: Container(
        // child: FutureBuilder(
        //   future: fetchUserInfo(),
        //   builder: (context, snapshot) {
        //     if (snapshot.connectionState == ConnectionState.done) {
        //       return Container(
        child: Center(
          child: Column(children: [
            Column(children: [
              SizedBox(
                height: 10,
              ),
              Container(
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.only(
                        topRight: Radius.circular(20),
                        bottomLeft: Radius.circular(20),
                        topLeft: Radius.circular(20),
                        bottomRight: Radius.circular(20)),
                    image: DecorationImage(
                        image: NetworkImage(url1), fit: BoxFit.cover)),
                child: Container(
                  width: width / 1.05,
                  height: 150,
                  child: Stack(
                    alignment: Alignment(0.0, 2.5),
                    children: <Widget>[
                      CircleAvatar(
                        radius: 55,
                        backgroundColor: Colors.white,
                        child: CircleAvatar(
                            radius: 50, backgroundImage: NetworkImage(url)),
                      ),
                    ],
                  ),
                ),
              ),
              SizedBox(
                height: 40,
              ),
              Container(
                height: 100,
                width: width / 1.05,
                decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.only(
                        topRight: Radius.circular(10),
                        bottomLeft: Radius.circular(10),
                        topLeft: Radius.circular(10),
                        bottomRight: Radius.circular(10))),
                child: Row(children: [
                  Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        SizedBox(
                          width: 120,
                        ),
                        Text("10", style: tc.eventDetail()),
                        Text("Green\n Flags", style: tc.Quiz_head()),
                      ]),
                  SizedBox(
                    width: 40,
                  ),
                  Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text("12", style: tc.eventDetail()),
                        Text(
                          "Yellow \nFlags",
                          style: tc.Quiz_head(),
                        ),
                      ]),
                  SizedBox(
                    width: 60,
                  ),
                  Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text("15", style: tc.eventDetail()),
                        Text(
                          "Red \nFlags",
                          style: tc.Quiz_head(),
                        ),
                      ]),
                ]),
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                height: 320,
                width: width / 1.05,
                decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.only(
                        topRight: Radius.circular(10),
                        bottomLeft: Radius.circular(10),
                        topLeft: Radius.circular(10),
                        bottomRight: Radius.circular(10))),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    SizedBox(
                      height: 20,
                    ),
                    Align(
                      alignment: Alignment.centerLeft,
                      child:
                          Text("General Information ", style: tc.eventDetail()),
                    ),
                    Text(general_info, style: tc.events()),
                    SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        Column(children: [
                          SizedBox(
                            width: 20,
                          ),
                          Text("Pan ID ", style: tc.eventDetail()),
                        ]),
                        Column(
                          children: [
                            Text(pan, style: tc.Quiz_head()),
                          ],
                        ),
                      ],
                    ),

                    SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        Column(children: [
                          SizedBox(
                            width: 20,
                          ),
                          Text("Job Status ", style: tc.eventDetail()),
                        ]),
                        Column(
                          children: [
                            Text(job_status, style: tc.Quiz_head()),
                          ],
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        Column(children: [
                          SizedBox(
                            width: 20,
                          ),
                          Text("Addhar ID ", style: tc.eventDetail()),
                        ]),
                        Column(
                          children: [
                            Text(addharID, style: tc.Quiz_head()),
                          ],
                        ),
                      ],
                    ),
                    // Text(
                    //   "Education",
                    //   style: TextStyle(
                    //     fontFamily: 'Roboto',
                    //     fontWeight: FontWeight.bold,
                    //     color: Colors.black,
                    //     fontSize: 20,
                    //   ),
                    // ),
                    // Text(
                    //   Education,
                    //   style: TextStyle(
                    //     fontFamily: 'Roboto',
                    //     fontWeight: FontWeight.bold,
                    //     color: Colors.black,
                    //     fontSize: 20,
                    //   ),
                    // ),
                  ],
                ),
                //        Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               general_info,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //   )
                // ]),
                // SizedBox(
                //   height: 50,
                // ),
                // Expanded(
                //   child: Padding(
                //     padding: EdgeInsets.only(top: 20, left: 20),
                //     child: SingleChildScrollView(
                //       scrollDirection: Axis.vertical,
                //       child: Column(
                //         children: [
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "General Information ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               general_info,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),

                //           SizedBox(
                //             height: 20,
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "Education ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               Education,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),

                //           SizedBox(
                //             height: 20,
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "Department ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               department,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           SizedBox(
                //             height: 20,
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "Organization ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               Organization,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),

                //           SizedBox(
                //             height: 20,
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "Languages ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               languages,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),

                //           SizedBox(
                //             height: 20,
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "Work Information ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               Birthday,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),

                //           SizedBox(
                //             height: 20,
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               "Birthday ",
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 fontWeight: FontWeight.bold,
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),
                //           Align(
                //             alignment: Alignment.centerLeft,
                //             child: Text(
                //               Birthday,
                //               style: TextStyle(
                //                 fontFamily: 'Roboto',
                //                 color: Colors.black,
                //                 fontSize: 20,
                //               ),
                //             ),
                //           ),

                //           SizedBox(
                //             height: 20,
                //           ),
                // Align(R
                //   alignment: Alignment.centerLeft,
                //   child: Text("Department \n$department",
                //       style: TextStyle(
                //         fontFamily: 'Roboto',
                //         fontSize: 20,
                //         color: Colors.black,
                //       )),
                // ),
                // SizedBox(
                //   height: 20,
                // ),
                // Align(
                //     alignment: Alignment.centerLeft,
                //     child: Text(
                //       "Name \n$name",
                //       style: TextStyle(
                //         fontFamily: 'Roboto',
                //         fontSize: 20,
                //         color: Colors.black,
                //       ),
                //     )),
                // SizedBox(
                //   height: 20,
                // ),
                // Align(
                //     alignment: Alignment.centerLeft,
                //     child: Text(
                //       "Gender\n",
                //       style: TextStyle(
                //         fontFamily: 'Roboto',
                //         fontSize: 20,
                //         color: Colors.black,
                //       ),
                //     )),
                // SizedBox(
                //   height: 20,
                // ),
              ),
              //   ),
              // ),
              // Align(
              //     alignment: Alignment.center,
              //     child: TextButton(
              //       style: ButtonStyle(
              //           foregroundColor:
              //               MaterialStateProperty.all<Color>(Colors.black)),
              //       onPressed: () {
              //         // Navigator.push(
              //         //     context,
              //         //     MaterialPageRoute(
              //                 // builder: (context) => ProfilePhoto()));
              //       },
              //       // child: Text(
              //       //   "Edit ",
              //       //   style: TextStyle(
              //       //     color: Colors.white,
              //       //   ),
              //       // ),
              //     )),
            ]),
            // )
          ]),
        ),
      ),
      // // return Text("Loading");
    );
  }
  //           },

  //       //   ),
  //       // ));
  // }
}
