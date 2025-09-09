import type React from 'react';

export const Checks: React.FC = () => {
  return (
    <>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
        />
        <label className='form-check-label' htmlFor='flexCheckDefault'>
          Default checkbox
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckChecked'
          checked
        />
        <label className='form-check-label' htmlFor='flexCheckChecked'>
          Checked checkbox
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckIndeterminate'
        />
        <label className='form-check-label' htmlFor='flexCheckIndeterminate'>
          Indeterminate checkbox
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDisabled'
          disabled
        />
        <label className='form-check-label' htmlFor='flexCheckDisabled'>
          Disabled checkbox
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckCheckedDisabled'
          checked
          disabled
        />
        <label className='form-check-label' htmlFor='flexCheckCheckedDisabled'>
          Disabled checked checkbox
        </label>
      </div>
      <h1> Radio Buttons</h1>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='flexRadioDefault'
          id='flexRadioDefault1'
        />
        <label className='form-check-label' htmlFor='flexRadioDefault1'>
          Default radio
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='flexRadioDefault'
          id='flexRadioDefault2'
          checked
        />
        <label className='form-check-label' htmlFor='flexRadioDefault2'>
          Default checked radio
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='flexRadioDisabled'
          id='flexRadioDisabled'
          disabled
        />
        <label className='form-check-label' htmlFor='flexRadioDisabled'>
          Disabled radio
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='flexRadioDisabled'
          id='flexRadioCheckedDisabled'
          checked
          disabled
        />
        <label className='form-check-label' htmlFor='flexRadioCheckedDisabled'>
          Disabled checked radio
        </label>
      </div>
      <h1> Switches </h1>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckDefault'
        />
        <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
          Default switch checkbox input
        </label>
      </div>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckChecked'
          checked
        />
        <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
          Checked switch checkbox input
        </label>
      </div>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckDisabled'
          disabled
        />
        <label className='form-check-label' htmlFor='flexSwitchCheckDisabled'>
          Disabled switch checkbox input
        </label>
      </div>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          type='checkbox'
          id='flexSwitchCheckCheckedDisabled'
          checked
          disabled
        />
        <label
          className='form-check-label'
          htmlFor='flexSwitchCheckCheckedDisabled'
        >
          Disabled checked switch checkbox input
        </label>
      </div>
      <h2> Inline form check</h2>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='checkbox'
          id='inlineCheckbox1'
          value='option1'
        />
        <label className='form-check-label' htmlFor='inlineCheckbox1'>
          1
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='checkbox'
          id='inlineCheckbox2'
          value='option2'
        />
        <label className='form-check-label' htmlFor='inlineCheckbox2'>
          2
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          id='inlineCheckbox3'
          value='option3'
          disabled
        />
        <label className='form-check-label' htmlFor='inlineCheckbox3'>
          3 (disabled)
        </label>
      </div>
      <h2>Checkbox toggle buttons</h2>
      <div>
        <input
          type='checkbox'
          className='btn-check'
          id='htmlFortn-check'
          autoComplete='off'
        />
        <label className='btn btn-primary' htmlFor='btn-check'>
          Single toggle
        </label>
        <input
          type='checkbox'
          className='btn-check'
          id='htmlFortn-check-two'
          autoComplete='off'
        />
        <label className='btn btn-primary' htmlFor='btn-check-two'>
          Single toggle
        </label>
      </div>
      <div>
        <input
          type='checkbox'
          className='btn-check'
          id='htmlFortn-check'
          autoComplete='off'
          checked
        />
        <label className='btn btn-primary' htmlFor='btn-check'>
          Checked
        </label>
      </div>
      <div>
        <input
          type='checkbox'
          className='btn-check'
          id='htmlFortn-check'
          autoComplete='off'
          checked
          disabled
        />
        <label className='btn btn-primary' htmlFor='btn-check'>
          Disabled
        </label>
      </div>
      <h2> Radio Toggle Buttons</h2>
      <div>
        <input
          type='radio'
          className='btn-check'
          name='options'
          id='option1'
          autoComplete='off'
          checked
        />
        <label className='btn btn-secondary' htmlFor='option1'>
          Checked
        </label>

        <input
          type='radio'
          className='btn-check'
          name='options'
          id='option2'
          autoComplete='off'
        />
        <label className='btn btn-secondary' htmlFor='option2'>
          Radio
        </label>

        <input
          type='radio'
          className='btn-check'
          name='options'
          id='option3'
          autoComplete='off'
          disabled
        />
        <label className='btn btn-secondary' htmlFor='option3'>
          Disabled
        </label>

        <input
          type='radio'
          className='btn-check'
          name='options'
          id='option4'
          autoComplete='off'
        />
        <label className='btn btn-secondary' htmlFor='option4'>
          Radio
        </label>
      </div>
    </>
  );
};
