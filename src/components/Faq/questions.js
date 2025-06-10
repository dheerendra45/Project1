import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';

const FAQAccordion = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const faqSections = [
    {
      title: "Shyam Metalics",
      items: [
        {
          id: 1,
          question: "Fusce dui eget risus nulla pellentesque in lorem bibendum commodo fusce pellentesque.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
          id: 2,
          question: "Dignissim adipiscing pellentesque commodo.",
          answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
        },
        {
          id: 3,
          question: "Pharetra eu vulputate amet et viverra mauris.",
          answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
        },
        {
          id: 4,
          question: "Nisl vitae pellentesque velit a risus maecenas.",
          answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        }
      ]
    },
    {
      title: "Lorem ipsum dolor sit amet",
      items: [
        {
          id: 5,
          question: "Orci etiam a ac hendrerit habitant pellentesque faucibus.",
          answer: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
          id: 6,
          question: "Est ac egestas varius eu tortor quis varius sollicitudin vulputate tristique.",
          answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
        }
      ]
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      items: [
        {
          id: 7,
          question: "Lorem ipsum dolor sit amet consectetur. Amet in ipsum eu vestibulum amet ac. Adipiscing tincidunt.",
          answer: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
        },
        {
          id: 8,
          question: "Massa justo proin sit ut auctor risus aenean tincidunt eleifend.",
          answer: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        },
        {
          id: 9,
          question: "Lacinia massa lectus nunc vel proin feugiat amet condimentum.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        {
          id: 10,
          question: "Lectus quam duis ac at amet auctor non placerat sit vitae purus tincidunt sollicitudin.",
          answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    },
    {
      title: "Lorem ipsum dolor sit",
      items: [
        {
          id: 11,
          question: "Vulputate ac commodo sit orci eleifend interdum pellentesque.",
          answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        },
        {
          id: 12,
          question: "Mi congue pellentesque aliquet quis convallis tempor elit purus nunc amet eros fermentum.",
          answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        },
        {
          id: 13,
          question: "Mattis sed mattis eget leo risus amet tincidunt porttitor leo sed posuere scelerisque.",
          answer: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
        },
        {
          id: 14,
          question: "Nec senectus integer in dui tellus nec elementum pellentesque aliquet aliquet aliquet consequat.",
          answer: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
        },
        {
          id: 15,
          question: "Purus consequat suspendisse",
          answer: "Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
        }
      ]
    },
    {
      title: "Lorem",
      items: [
        {
          id: 16,
          question: "Commodo id accumsan scelerisque",
          answer: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        },
        {
          id: 17,
          question: "Viverra risus nibh commodo lobortis",
          answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
        },
        {
          id: 18,
          question: "Tempus lorem sapien pellentesque bibendum.",
          answer: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
        },
        {
          id: 19,
          question: "Nibh interdum mattis quis eget lectus vel volutpat pellentesque.",
          answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          id: 20,
          question: "Vel tortor euismod enim velit nunc viverra lorem.",
          answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        },
        {
          id: 21,
          question: "Pharetra vulputate quisque gravida scelerisque.",
          answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
          id: 22,
          question: "Sit et tellus vitae id cursus cras neque vestibulum.",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
          id: 23,
          question: "Risus sed gravida eget vitae in enim imperdiet sed gravida morbi fermentum.",
          answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          id: 24,
          question: "Maecenas elementum tortor sociis pellentesque.",
          answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
        }
      ]
    }
  ];

  const toggleExpanded = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="max-w-4xl mt-8 mx-auto p-6 bg-white-50 min-h-screen">
      {/* All Sections */}
      {faqSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          {/* Section Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{section.title}</h1>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          {/* FAQ Items for this section */}
          <div className="space-y-0">
            {section.items.map((item) => (
              <div key={item.id} className="border-b border-gray-300">
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full py-6 flex justify-between items-start text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-900 text-lg pr-4 leading-relaxed">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 mt-1">
                    {expandedItems.has(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-4 h-0.5 bg-gray-600"></div>
                        <div className="w-0.5 h-4 bg-gray-600 absolute"></div>
                      </div>
                    )}
                  </div>
                </button>
                
                {expandedItems.has(item.id) && (
                  <div className="pb-6 pr-10">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Back to Top */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
        >
          <span className="text-sm">Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;