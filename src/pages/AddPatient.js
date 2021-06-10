import { FaceAdd32 } from '@carbon/icons-react';
import { Button, Checkbox, DatePicker, DatePickerInput, RadioButtonGroup, TextArea, TextInput } from 'carbon-components-react';
import { RadioButton } from 'carbon-components-react/lib/components/RadioButton/RadioButton';
import React from 'react'

function AddPatient() {
    return (
        <div>
            <h1 className="addText"><FaceAdd32/>AddPatient</h1>
            <form className="addPatientForm">
                <div className="column">
                    <TextInput id="firstName" labelText="First Name" />
                    <TextInput id="middleName" labelText="Middle Name" />
                    <TextInput id="lastName" labelText="Last Name" />
                    <RadioButtonGroup legendText="Gender" value="Gender" name="Gender">
                        <RadioButton labelText='Male' value='Male' />
                        <RadioButton labelText='Female' value='Female' />
                        <RadioButton labelText='Other' value='Other' />
                    </RadioButtonGroup>
                    <TextInput id="idNumber" labelText="ID Number"  type="number"/>
                    <TextInput id="phoneNumber" labelText="Phone Number"  type="number"/>
                    <span>
                        <DatePicker datePickerType='single' ><DatePickerInput
                            placeholder="mm/dd/yyy" labelText='Date of Birth' id='date-picker' /></DatePicker>
                        <TextInput id='age' labelText="Age" type='number' />
                        <Checkbox labelText='Estimate' id='ageEstimate' />
                    </span>
                    <TextInput id="birthPlace" labelText="Birth Place" />


                </div>
                <div className="column">

                    <TextInput id='patientId' labelText="Patient Identifier" />
                    <TextInput id='altPerson' labelText="Alternative Person" />
                    <TextInput id='altPersonNumber' labelText="Alternative Person Number" />
                    <TextInput id='nextOfKin' labelText="Next of Kin" />
                    <TextInput id='nextOfKinContacts' labelText="N.O.K Contacts" />
                    <TextArea id="reasonForVisit" labelText="Reason for Visit" />
                    <Button className="saveButton">Save</Button>
                </div>

            </form>
        </div>
    )
}
export default AddPatient;