import 'dart:convert';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter_application_1/constants/colorConstants.dart';

import 'package:flutter_application_1/Card.dart';
import 'package:flutter_application_1/constants/textConstants.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:swipeable_card_stack/swipeable_card_stack.dart';
import 'package:http/http.dart' as http;

class Jobs extends StatefulWidget {
  const Jobs({Key? key}) : super(key: key);

  @override
  State<Jobs> createState() => _Jobs();
}

class _Jobs extends State<Jobs> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getUserData();
  }

  Future getUserData() async {
    var response = await http.get(Uri.https(
      'codeshahstrahojayega-production.up.railway.app',
      'getAllJobs',
    ));
    var jsonData = jsonDecode(response.body);
    List<User> cafes = [];
    // List<String> getVacDates(String s) => [
    //   for (final timeline in jsonDecode(s)['timeline'])
    //     timeline['date'] as String
    // ];
    print(jsonData);
    Map newMap = jsonData;
    for (var v in newMap.values) {
      print(v);
      //below is the solution
    }
    // for (var u in jsonData) {
    //   User cafe = User(
    //     u['Desc'] as String,
    //     u['Position'] as String,
    //     u['Tags'] as String,
    //     u['URL'] as String,
    //   );

    //   cafes.add(cafe);
    // }
    print(cafes.length);
    return cafes;
  }

  int counter = 0;

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    ColorConstants cc = ColorConstants();
    TextConstants tc = TextConstants(height: height, width: width);
    //create a CardController
    SwipeableCardSectionController _cardController =
        SwipeableCardSectionController();

    return Scaffold(
      backgroundColor: cc.railways,
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          SwipeableCardsSection(
            cardController: _cardController,
            context: context,

            //add the first 3 cards
            items: [
              CardView(
                  url: "https://picsum.photos/id/431/200/300",
                  position: "Barista",
                  tags: "Freelancing",
                  desc:
                      "As a barista, you will be responsible for creating and serving high-quality coffee and espresso drinks to customers. "),
              CardView(
                  desc:
                      "As a waiter/waitress, you will be responsible for providing a high-quality dining experience to customers. ",
                  position: "Waiter",
                  tags: "Freelancing",
                  url:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tmSV_jDdEXnlUdLd_X1OT7sovsegtu1qWg&usqp=CAU"),
              CardView(
                desc:
                    " You will greet customers, take orders, serve food and beverages, and provide assistance as needed to ensure customer satisfaction.",
                position: "Waiter",
                tags: "Fulltime",
                url:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsS_PEiwg5V_9W0QT1YFJxzP1RTLqSXkIRbg&usqp=CAU",
              ),
              CardView(
                  desc:
                      "As a barista, you will be responsible for creating and serving high-quality coffee and espresso drinks to customers. You will also maintain the cleanliness and organization of the coffee shop, handle cash and credit transactions, and provide excellent customer service.",
                  position: "Barista ",
                  tags: "Fulltime",
                  url: "https://picsum.photos/id/201/200/300"),
              CardView(
                  desc:
                      "As a chef, you will be responsible for creating and executing high-quality dishes in a timely manner. You will manage the kitchen staff, maintain inventory, and ensure that the kitchen adheres to health and safety standards.",
                  position: "Chef",
                  tags: "Fulltime",
                  url: "https://picsum.photos/id/63/200/300"),
            ],
            onCardSwiped: (dir, index, widget) {
              //Add the next card

              if (dir == Direction.left) {
                print('onDisliked ${(widget as CardView).text} $index');
              } else if (dir == Direction.right) {
                Fluttertoast.showToast(
                  msg: "Applied for Job!", // message
                  toastLength: Toast.LENGTH_SHORT, // length
                  gravity: ToastGravity.BOTTOM, // location
                  // duration
                );
                print('onLiked ${(widget as CardView).text} $index');
              } else if (dir == Direction.up) {
                print('onUp ${(widget as CardView).text} $index');
              } else if (dir == Direction.down) {
                print('onDown ${(widget as CardView).text} $index');
              }
            },
            enableSwipeUp: true,
            enableSwipeDown: true,
          ),
          SizedBox(
            height: 80,
          ),
          // Container(
          //   margin: EdgeInsets.symmetric(vertical: 20.0),
          //   child: Row(
          //     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          //     children: [
          //       FloatingActionButton(
          //         backgroundColor: Colors.red,
          //         child: Icon(Icons.chevron_left),
          //         onPressed: () => _cardController.triggerSwipeLeft(),
          //       ),
          //       FloatingActionButton(
          //         backgroundColor: Colors.green,
          //         child: Icon(Icons.chevron_right),
          //         onPressed: () => _cardController.triggerSwipeRight(),
          //       ),
          //     ],
          //   ),
          // )
        ],
      ),
    );
  }
}

class User {
  final String desc, position, Tags, url;
  User(this.desc, this.position, this.Tags, this.url);
}
