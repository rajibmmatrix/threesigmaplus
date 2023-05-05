import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MathText} from 'react-native-math-view';
import {Container, Header} from '~components';
import {COLORS, FONTS} from '~constants';
import {StackScreenProps} from 'types';

export default function QuestionsScreen({}: StackScreenProps<'Contact'>) {
  return (
    <Container>
      <Header title="Contact us" />
      <View style={styles.container}>
        <Text style={styles.title}>Contact us Screen</Text>
        {data.problems.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Text style={styles.title}>Q{index}:</Text>
              {item.problem_text.stmt.map((qu, i) => {
                if (qu.type === 'multiple_choice') {
                  return (
                    <MathText
                      key={i}
                      value={qu?.text}
                      direction="ltr"
                      renderError={({error}: any) => (
                        <Text style={[{fontWeight: 'bold'}]}>{error}</Text>
                      )}
                      CellRendererComponent={<TouchableOpacity />}
                    />
                  );
                }
              })}
              {item.problem_text.options.map((ops, opsi) => {
                return (
                  <React.Fragment key={opsi}>
                    <View style={{flexDirection: 'row'}}>
                      <Text>{opsi}</Text>
                      {ops.map((op, opi) => {
                        if (op.type === 'mcq_option') {
                          return (
                            <MathText
                              key={opi}
                              value={op?.text}
                              direction="ltr"
                              renderError={({error}: any) => (
                                <Text style={[{fontWeight: 'bold'}]}>
                                  {error}
                                </Text>
                              )}
                              CellRendererComponent={<TouchableOpacity />}
                            />
                          );
                        }
                      })}
                    </View>
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: FONTS.RobotoRegular,
    color: COLORS.primary_text,
  },
});

export const data = {
  session_id: 11,
  started_at: '1683060567',
  ended_at: null,
  subject_id: 7,
  chapter_id: 68,
  status: 'active',
  max_question_score: 4,
  problems: [
    {
      session_id: 11,
      sequence_no: 1,
      answer_submitted: '2',
      multiple_correct_options: false,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A particle of mass \\(m\\) at rest is acted upon by a force \\(F\\) for a time \\(t\\). Its kinetic energy after an interval \\(t\\) is :',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(\\frac{F^{2}t^{2}}{m}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(\\frac{F^{2}t^{2}}{2m}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(\\frac{F^{2}t^{2}}{3m}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(\\frac{Ft}{2m}\\)',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 2,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A rocket with a lift- off mass&nbsp;\\(3.5\\times 10^{4}\\:kg\\)&nbsp;is blasted upwards with an initial acceleration of&nbsp;\\(10m/s^{2}\\).&nbsp;Then the initial thrust of the blast is&nbsp;',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(1.75\\times 10^{5}\\:N\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(3.5\\times 10^{5}\\:N\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(7.0\\times 10^{5}\\:N\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(14.0\\times 10^{5}\\:N\\)',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 3,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A particle \\(P\\) moving with speed \\(v\\) undergoes a head - on elastic collision with another particle \\(Q\\) of identical mass but at rest. After the collision',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: 'Both \\(P\\) and \\(Q\\) move forward with speed&nbsp;\\(\\frac{v}{2}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'Both \\(P\\) and \\(Q\\) move forward with speed&nbsp;\\(\\frac{v}{\\sqrt{2}}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(P\\) comes to rest and \\(Q\\) moves forward with speed \\(v\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(P\\) and \\(Q\\) move in opposite directions with speed',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 4,
      answer_submitted: '',
      multiple_correct_options: false,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A ball of mass \\(m\\) moving with velocity \\(V,\\) makes a head on elastic collision with a ball of the same mass moving with velocity \\(2V\\) towards it. Taking direction of \\(V\\) as positive velocities of the two balls after collision are',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(-V\\) and \\(2V\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(2V\\) and \\(-V\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(V\\) and \\(-2V\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(-2V\\) and \\(V\\)',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 5,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A body of mass \\(m\\) collides against a wall with a velocity \\(v\\) and rebounds with the same speed. Its change of momentum is',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(2\\:mv\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(mv\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(-mv\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'Zero',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 6,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A moving mass of \\(8\\:kg\\) collides elastically with a stationary mass of \\(2\\:kg\\). If \\(E\\) be the initial kinetic energy of the mass, the kinetic energy left with it after collision will be',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(0.80\\:E\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(0.64\\:E\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(0.36\\:E\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(0.08\\:E\\)',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 7,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A cricket ball of mass \\(250\\: g\\) collides with a bat with velocity \\(10\\: m/s\\) and returns with the same velocity within \\(0.01\\) second. The force acted on bat is',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(25\\: N\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(50\\: N\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(250\\: N\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(500\\: N\\)',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 8,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'In the given figure a ball strikes a rod elastically and rod is smoothly hinged at point \\(A.\\) Then which of the statement(s) is/are correct for the collision?',
          },
          {
            type: 'image',
            url: 'https://dev.threesigmaplus.com/static/images/xb9a8gvc.jpg',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: 'Linear momentum of system (ball + rod) is conserved',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'Angular momentum of system about hinged point \\(A\\) is conserved',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'Initial \\(KE\\) of the system is equal to final \\(KE\\) of the system',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'Linear momentum of ball is conserved.',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 9,
      answer_submitted: '',
      multiple_correct_options: false,
      problem_text: {
        type: 'twos_marker',
        stmt: [
          {
            type: 's1_marker',
            parts: [
              {
                type: 'paragraph',
                text: 'The slope of momentum versus time curve give us the acceleration.',
              },
            ],
          },
          {
            type: 's2_marker',
            parts: [
              {
                type: 'paragraph',
                text: 'Acceleration is given by the rate of change of momentum.',
              },
            ],
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: 'If both Statemant1 and Statemant2 are true and the Statemant2 is the correct explanation of the Statemant1.',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'If both Statemant1 and Statemant2 are true but Statemant2 is not the correct explanation of the Statemant1.',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'If Statemant1 is true but Statemant2 is false.',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'If the Statemant1 and Statemant2 both are false.',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: 'If Statemant1 is false but Statemant2 is true.',
            },
          ],
        ],
      },
    },
    {
      session_id: 11,
      sequence_no: 10,
      answer_submitted: '',
      multiple_correct_options: true,
      problem_text: {
        type: 'multiple_choice',
        stmt: [
          {
            type: 'multiple_choice',
            text: 'A bullet of mass \\(0.01kg,\\) travelling at a speed of&nbsp;\\(500ms^{-1},\\) strikes a block of mass \\(2kg,\\) which is suspended by a string of length \\(5m\\) and emerges out. The block rises by a vertical distance of \\(0.1m.\\) The speed of the bullet after it emerges from the block is',
          },
        ],
        options: [
          [
            {
              type: 'mcq_option',
              text: '\\(55ms^{-1}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(110ms^{-1}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(220ms^{-1}\\)',
            },
          ],
          [
            {
              type: 'mcq_option',
              text: '\\(440ms^{-1}\\)',
            },
          ],
        ],
      },
    },
  ],
};
