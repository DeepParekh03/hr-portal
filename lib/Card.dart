import 'package:flutter/material.dart';

import 'package:flutter_application_1/constants/colorConstants.dart';

import 'package:flutter_application_1/constants/textConstants.dart';

class CardView extends StatelessWidget {
  final String url;
  final String desc;
  final String position;
  final String tags;

  const CardView(
      {super.key,
      required this.url,
      required this.desc,
      required this.position,
      required this.tags});

  get text => null;

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width;
    double height = MediaQuery.of(context).size.height;
    ColorConstants cc = ColorConstants();

    TextConstants tc = TextConstants(height: height, width: width);
    return Center(
      child: Card(
        elevation: 0,
        shape: RoundedRectangleBorder(
          side: BorderSide(
            color: Theme.of(context).colorScheme.outline,
          ),
          borderRadius: const BorderRadius.all(Radius.circular(12)),
        ),
        child: Container(
            height: 670,
            width: 420,
            child: Stack(
              children: [
                Container(
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                          topRight: Radius.circular(11),
                          bottomLeft: Radius.circular(11),
                          topLeft: Radius.circular(11),
                          bottomRight: Radius.circular(11)),
                      image: DecorationImage(
                          image: NetworkImage(url), fit: BoxFit.fill)),
                ),
                Positioned(
                  bottom: 20,
                  //bottom: 0,
                  left: 0,

                  child: Container(
                    width: 300,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        Align(
                          alignment: Alignment.bottomLeft,
                          child: Text('Position:', style: tc.white17()),
                        ),
                        Align(
                          alignment: Alignment.bottomLeft,
                          child: Text(position, style: tc.white17()),
                        ),
                        Align(
                          alignment: Alignment.bottomLeft,
                          child: Text('Tag:', style: tc.white17()),
                        ),
                        Align(
                          alignment: Alignment.bottomLeft,
                          child: Text(tags, style: tc.white17()),
                        ),
                        Align(
                          alignment: Alignment.bottomLeft,
                          child: Text('Description:', style: tc.white17()),
                        ),
                        Text(
                          desc,
                          maxLines: 5,
                          overflow: TextOverflow.ellipsis,
                          style: tc.white17(),
                        )
                      ],
                    ),
                  ),
                ),
              ],
            )

            // decoration: BoxDecoration(
            //     borderRadius: BorderRadius.only(
            //         topRight: Radius.circular(11),
            //         bottomLeft: Radius.circular(11),
            //         topLeft: Radius.circular(11),
            //         bottomRight: Radius.circular(11)),
            //     image:
            //         DecorationImage(
            //            image:

            //         NetworkImage(url), fit: BoxFit.fill)),
            // child: Column(children: [
            //   Text('Hello'),
            //   Text('Hi'),
            // ]),
            ),
      ),
    );
  }
}
